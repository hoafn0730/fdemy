import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Watch.module.scss';
import Header from './Header';
import Video from './Video';
import Tracks from './Tracks';
import Quiz from './Quiz';
import ActionBar from '~/components/ActionBar';
import Button from '~/components/Button';
import Modal from '~/components/Modal';
import Comment from '~/components/Comment';
import { openModal } from '~/store/actions/modalAction';
import * as watchService from '~/services/watchService';

const cx = classnames.bind(styles);

function Watch() {
    const [track, setTrack] = useState();
    const [process, setProcess] = useState([]);
    const [lesson, setLesson] = useState({});
    const [nextStep, setNextStep] = useState();
    const [prevStep, setPrevStep] = useState();
    const [isUpdateTrack, setIsUpdateTrack] = useState(false);
    const [isQuiz, setIsQuiz] = useState(false);
    const [isShowTracks, setIsShowTracks] = useState(true);
    const [isShowComments, setIsShowComments] = useState(false);

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const { slug } = useParams();

    useEffect(() => {
        (async () => {
            const { data } = await watchService.getTracks(slug);
            setTrack(data.track);
            setProcess(data.userProcess);

            if (data.userProcess.length < 1 && data.track.steps.length > 0) {
                await watchService.saveUserProcess(data.track.steps[0].uuid);
            }

            if (!searchParams.has('id')) {
                const currentStep = data.track.steps?.find(
                    (step) => step.id === data.userProcess[data.userProcess.length - 1],
                );
                if (currentStep) {
                    setSearchParams((params) => {
                        params.set('id', currentStep.uuid);
                        return params;
                    });
                } else {
                    if (data.track.steps.length > 0) {
                        setSearchParams((params) => {
                            params.set('id', data.track.steps[0].uuid);
                            return params;
                        });
                    }
                }
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUpdateTrack]);

    useEffect(() => {
        (async () => {
            if (searchParams.has('id')) {
                const res = await watchService.getStep(searchParams.get('id'));
                setLesson(res.data.step.lesson);
                setNextStep(res.data.nextStep);
                setPrevStep(res.data.prevStep);

                if (!process.includes(res.data.step.id)) {
                    nextStep && (await watchService.saveUserProcess(nextStep));
                    setProcess((prev) => [...prev, res.data.step.id]);
                }
            }
            setIsQuiz(false);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    const handleShowTracks = () => {
        setIsShowTracks((prev) => !prev);
    };

    const handleShowComments = () => {
        if (!isShowComments) {
            setIsShowComments(true);
        } else {
            dispatch(openModal());
        }
    };

    const checkElapsedTime = (e) => {
        const interval = setInterval(async () => {
            const duration = e.target.getDuration();
            const currentTime = e.target.getCurrentTime();
            if (e.target.getPlayerState() > 1) {
                clearInterval(interval);
            }

            const step = track.steps?.find((step) => step.uuid === nextStep);
            if (process.includes(step?.id)) {
                setIsUpdateTrack(true);
                clearInterval(interval);
            } else {
                if ((currentTime / duration) * 100 > 70) {
                    nextStep && (await watchService.saveUserProcess(nextStep));
                    setIsUpdateTrack(true);
                    clearInterval(interval);
                }
            }
        }, 1000);
    };

    const handleOpenQuiz = () => {
        if (lesson?.quizzes.length > 0) {
            setIsQuiz(true);
        }
    };

    const handleCloseQuiz = () => {
        setIsQuiz(false);
    };

    return (
        <div className={cx('wrapper')}>
            <Header track={track} process={process} isQuiz={isQuiz} onCloseQuiz={handleCloseQuiz} />
            <div className={cx('content')}>
                {isQuiz && lesson?.quizzes.length > 0 ? (
                    <Quiz data={lesson?.quizzes} onClose={handleCloseQuiz} />
                ) : (
                    <Video
                        title={lesson?.title}
                        video={lesson?.video}
                        type={lesson?.videoType}
                        content={lesson?.content}
                        hasQuiz={lesson?.quizzes && lesson?.quizzes.length > 0}
                        onOpenQuiz={handleOpenQuiz}
                        onStateChange={checkElapsedTime}
                    />
                )}

                {isShowTracks && <Tracks data={track} process={process} onChangeShow={handleShowTracks} />}
            </div>
            <ActionBar
                prevStep={prevStep}
                nextStep={nextStep}
                canNext={isUpdateTrack}
                isShowTracks={isShowTracks}
                onChangeShow={handleShowTracks}
            />
            <Button
                rounded
                className={cx('commentBtn')}
                leftIcon={<FontAwesomeIcon icon={faComments} />}
                onClick={handleShowComments}
            >
                Hỏi đáp
            </Button>
            {isShowComments && (
                <Modal>
                    <Comment />
                </Modal>
            )}
        </div>
    );
}

export default Watch;

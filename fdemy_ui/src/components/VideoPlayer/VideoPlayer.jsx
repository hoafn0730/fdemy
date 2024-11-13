import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { memo, useRef, useState } from 'react';

import styles from './VideoPlayer.module.scss';
import YouTube from 'react-youtube';

const cx = classnames.bind(styles);

function VideoPlayer({ title, video, type, onStateChange }) {
    const [isPlay, setIsPlay] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const videoRef = useRef();

    const handlePlay = () => {
        const video = videoRef.current;
        if (video && video.paused) {
            video.play();
            setIsPlay(true);
        } else {
            video.pause();
            setIsPlay(false);
        }

        setShowButton(true);
        setTimeout(() => {
            setShowButton(false);
        }, 1380);
    };

    const handleDblClick = () => {
        const video = videoRef.current;

        if (video) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                /* Firefox */
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                /* IE/Edge */
                video.msRequestFullscreen();
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('player')} onClick={handlePlay} onDoubleClick={handleDblClick}>
                {type && type === 'youtube' ? (
                    <YouTube
                        id="embed-youtube"
                        title={title}
                        videoId={video}
                        className={cx('video-steam')}
                        iframeClassName={cx('video-steam')}
                        onStateChange={onStateChange}
                        opts={{
                            playerVars: {
                                autoplay: 1,
                            },
                        }}
                    />
                ) : (
                    <>
                        {video && (
                            <>
                                <video className={cx('video-steam')} src={video} ref={videoRef}></video>
                                {showButton && (
                                    <div className={cx('shadow')}>
                                        {isPlay ? (
                                            <FontAwesomeIcon icon={faPlay} />
                                        ) : (
                                            <FontAwesomeIcon icon={faPause} />
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

VideoPlayer.propTypes = {
    title: PropTypes.string,
    video: PropTypes.string,
    type: PropTypes.string,
    onStateChange: PropTypes.func,
};

export default memo(VideoPlayer);

import classnames from 'classnames/bind';
import { memo } from 'react';

import styles from './Video.module.scss';
import VideoPlayer from '~/components/VideoPlayer';
import Heading from '~/components/Heading';
import Powered from '~/components/Powered';
import MarkdownParser from '~/components/MarkdownParser';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function Video({ title, video, type, content, hasQuiz, onOpenQuiz, onStateChange }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video')}>
                <VideoPlayer title={title} video={video} type={type} onStateChange={onStateChange} />
            </div>
            <div className={cx('content')}>
                <Heading title={title} updatedAt="tháng 11 năm 2022" />
                {hasQuiz && (
                    <Button className={cx('openQuizBtn')} outline rounded onClick={onOpenQuiz}>
                        Quiz
                    </Button>
                )}
                {content && (
                    <MarkdownParser content={content} style={{ '--font-size': '1.6rem', '--line-height': 2 }} />
                )}
                <Powered />
            </div>
        </div>
    );
}

export default memo(Video);

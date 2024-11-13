import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
import config from '~/config';

const cx = classnames.bind(styles);

function Header({ track, process, isQuiz, onCloseQuiz }) {
    const navigate = useNavigate();
    const userProcess = (process?.length / track?.steps?.length) * 100 || 0;

    return (
        <header className={cx('wrapper')}>
            <div
                className={cx('btn-back')}
                onClick={() => {
                    if (isQuiz) {
                        onCloseQuiz();
                    } else {
                        navigate('/');
                    }
                }}
            >
                <FontAwesomeIcon className={cx('icon')} icon={faAngleLeft} />
            </div>
            <Link to={config.routes.home} className={cx('logo')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCode} />
                <strong>Fdemy</strong>
            </Link>
            <div className={cx('actions')}>
                <div className={cx('process')}>
                    <span>{Math.floor(userProcess)}%</span>
                </div>
                <span className={cx('completed-msg')}>
                    <strong>
                        {process?.length}/{track?.steps?.length}{' '}
                    </strong>
                    bài học
                </span>
            </div>
        </header>
    );
}

export default Header;

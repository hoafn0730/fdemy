import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './HeadingTabs.module.scss';

const cx = classnames.bind(styles);

function HeadingTabs({ tabs }) {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('tabs')}>
                {tabs.map((tab, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={tab.to} className={(nav) => cx({ active: nav.isActive })}>
                                {tab.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

HeadingTabs.propTypes = {
    tabs: PropTypes.array.isRequired,
};

export default HeadingTabs;

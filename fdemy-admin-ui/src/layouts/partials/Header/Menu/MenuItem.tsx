import classnames from 'classnames/bind';
import { ReactNode } from 'react';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

// const defaultFnc = () => {};

export type MenuItem = {
    title: string;
    icon: ReactNode;
    to?: string;
    children?: { title: string; data: any[] };
    toggle?: boolean;
    separate?: boolean;
};

type MenuItemProps = {
    data: MenuItem;
    onClick?: () => void;
};

function MenuItem({ data, onClick }: MenuItemProps) {
    const classes = cx('item', {
        separate: data.separate,
    });

    return (
        <Button to={data.to} className={classes} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;

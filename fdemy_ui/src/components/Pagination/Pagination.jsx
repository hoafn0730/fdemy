import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Pagination.module.scss';
import Button from '../Button';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const cx = classnames.bind(styles);

function Pagination({ total, pageSize = 10 }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');
    const pageNumber = Math.ceil(total / pageSize);

    useEffect(() => {
        if (!searchParams.has('page')) {
            setSearchParams((params) => {
                params.set('page', 1);
                return params;
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const items = [];
    for (let pageIndex = 1; pageIndex <= pageNumber; pageIndex++) {
        items.push(
            <Button
                key={pageIndex}
                className={cx('btn', {
                    active: pageIndex === +page,
                })}
                onClick={() => handleChangePage(pageIndex)}
            >
                {pageIndex}
            </Button>,
        );
    }

    const handleChangePage = (number) => {
        setSearchParams((params) => {
            params.set('page', number.toString());
            return params;
        });
    };

    const handlePrev = () => {
        setSearchParams((params) => {
            params.set('page', (+page - 1).toString());
            return params;
        });
    };

    const handleNext = () => {
        setSearchParams((params) => {
            params.set('page', (+page + 1).toString());
            return params;
        });
    };

    return (
        <>
            {pageNumber > 0 && (
                <div className={cx('wrapper')}>
                    <Button className={cx('btn', 'prev')} disabled={+page === 1} onClick={handlePrev}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Button>
                    {items}
                    <Button className={cx('btn', 'next')} disabled={+page === pageNumber} onClick={handleNext}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                </div>
            )}
        </>
    );
}

export default Pagination;

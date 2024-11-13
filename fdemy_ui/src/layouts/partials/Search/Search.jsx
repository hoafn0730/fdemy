import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import styles from './Search.module.scss';
import PopperWrapper from '~/components/Popper/Wrapper';
import SearchItem from './SearchItem';
import * as searchService from '~/services/searchService';
import useDebounce from '~/hooks/useDebounce';

const cx = classnames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);

    const navigate = useNavigate();
    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        searchService
            .search(encodeURIComponent(debouncedValue.trim()))
            .then((res) => {
                setSearchResult(res);
                setLoading(false);
            })
            .catch(() => {
                setSearchResult([]);
                setLoading(false);
            });
    }, [debouncedValue]);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleFocus = (e) => {
        setShowResult(true);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClearText = () => {
        setSearchValue('');
        setShowResult(false);
        inputRef.current.focus();
    };

    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive={true}
            placement="bottom"
            render={(attrs) => {
                return (
                    <PopperWrapper tabIndex={-1} {...attrs}>
                        <div className={cx('result')}>
                            <div className={cx('header')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
                                <span>Kết quả cho '{searchValue}'</span>
                            </div>

                            <div className={cx('heading')}>
                                <h5>KHÓA HỌC</h5>
                                <Link to={'/search?q=' + debouncedValue} className={cx('seeMore')}>
                                    Xem thêm
                                </Link>
                            </div>
                            {searchResult.map((result) => (
                                <SearchItem
                                    key={result.id}
                                    title={result.title}
                                    to={'/courses/' + result.slug}
                                    image={result.image}
                                />
                            ))}
                        </div>
                    </PopperWrapper>
                );
            }}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    className={cx('search-input')}
                    placeholder="search..."
                    onChange={handleChange}
                    onFocus={handleFocus}
                />

                {!!searchValue && !loading && (
                    <div className={cx('clearText')} onClick={handleClearText}>
                        &times;
                    </div>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <Tippy delay={[0, 200]} content="search" placement="right">
                    <button
                        className={cx('btn-search')}
                        onClick={() => {
                            navigate('/search?q=' + debouncedValue);
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </Tippy>
            </div>
        </HeadlessTippy>
    );
}

export default Search;

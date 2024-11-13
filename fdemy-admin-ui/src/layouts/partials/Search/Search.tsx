import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import styles from './Search.module.scss';
import PopperWrapper from '~/components/Popper/Wrapper';
import SearchItem from './SearchItem';
import useDebounce from '~/hooks/useDebounce';

const cx = classnames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    // const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);

    // const navigate = useNavigate();
    const inputRef = useRef<any>();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            // setSearchResult([]);
            return;
        }

        setLoading(true);

        // search
    }, [debouncedValue]);

    const handleChange: any = (e: InputEvent) => {
        const target = e.target as HTMLInputElement;
        setSearchValue(target.value);
    };

    const handleFocus = () => {
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
            visible={showResult}
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
                            {[1, 2, 3, 4, 5].map((num) => (
                                <SearchItem key={num} title={num + ''} to={'/courses/' + num} image={num + ''} />
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
                            alert(123);
                            // navigate('/search?q=' + debouncedValue);
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

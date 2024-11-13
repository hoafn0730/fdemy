import classnames from 'classnames/bind';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';

import styles from './Slideshow.module.scss';
import SlideItem from './SlideItem';
import { NextArrow, PrevArrow } from './Arrows';
import * as bannerService from '~/services/bannerService';

const cx = classnames.bind(styles);
const PAGE = 1;

function Slideshow() {
    const [slides, setSlides] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 10000,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => <button>{i + 1}</button>,
    };

    const fetchApi = () => {
        bannerService.getBanner(PAGE).then((res) => {
            setSlides(res.data);
        });
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                {slides?.length > 0 &&
                    slides.map((item, index) => {
                        const style = JSON.parse(`${item.style}`);
                        return (
                            <SlideItem
                                key={index}
                                title={item.title}
                                desc={item.description}
                                linkTo={item.linkTo}
                                ctaTitle={item.ctaTitle}
                                image={item.image}
                                styles={{ ...style }}
                            />
                        );
                    })}
            </Slider>
        </div>
    );
}

export default Slideshow;

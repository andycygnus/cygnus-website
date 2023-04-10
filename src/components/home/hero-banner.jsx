import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

const hero_slider = [
    {
        id: 1,
        title: (
            <>
                Cygnus Payments
                <br /> is Easy to Work With!
            </>
        ),
        subtitle: 'Honesty, Transparency & Convenience',
        des: (
            <>
                We make it easy for you to accept payments with flexible options
                <br /> and competitive rates. We have the solution for you.
            </>
        ),
        appointment: 'Get a Quote',
        about: 'About us',
        img_1: '/assets/img/slider/slider-bg-3.png',
        img_2: '/assets/img/slider/slider-bg-4.png',
    },
]

// slider setting
const setting = {
    // Optional parameters
    slidesPerView: 1,
    effect: 'fade',
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.slider-n',
        prevEl: '.slider-p',
    },
}

// social_links
const social_links = []
const HeroBanner = () => {
    const [isLoop, setIsLoop] = useState(false)
    useEffect(() => {
        setIsLoop(true)
    }, [])
    return (
        <>
            <section className="slider-area slider-tp-top p-relative">
                {hero_slider.map((item) => (
                    <div className="swiper-slide bg-white mt-15">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-12 order-2 order-lg-1">
                                    <div className="slider-content pt-60">
                                        <h2
                                            className="slider-content__title mb-45"
                                            style={{ color: '#424143' }}
                                        >
                                            {item.title}
                                        </h2>
                                        <h3
                                            className="slider-content__subtitle mb-30"
                                            style={{ color: '#808285' }}
                                        >
                                            {item.subtitle}
                                        </h3>
                                        <p>{item.des}</p>
                                        <div className="slider-content__btn mb-40">
                                            <Link
                                                className="tp-btn"
                                                href="/quote"
                                            >
                                                {item.appointment}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-2">
                                    <div className="slider-content__bg">
                                        <img
                                            src={item.img_1}
                                            alt="slider-img"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                maxWidth: '100%',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </div>
                                    <div className="col-lg-2 slider-content__shape d-none d-md-block">
                                        <img
                                            src={item.img_2}
                                            alt="slider-shape"
                                            style={{
                                                width: '90%',
                                                height: 'auto',
                                                maxWidth: '250px',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default HeroBanner

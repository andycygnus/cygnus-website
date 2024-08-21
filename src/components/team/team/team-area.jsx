import team_one_data from '@/data/team-one-data'
import Link from 'next/link'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

const setting = (nextEl, prevEl) => ({
    spaceBetween: -50,
    slidesPerView: 4,
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        1400: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
    navigation: {
        nextEl: nextEl,
        prevEl: prevEl,
    },
})

const TeamArea = () => {
    const slides = []
    for (let i = 0; i < team_one_data.length; i += 6) {
        slides.push(team_one_data.slice(i, i + 6))
    }

    return (
        <>
            <section className="team-area pt-125 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-section text-center">
                                <h3 className="tp-section__title mb-70">
                                    Meet Our Partners
                                </h3>
                            </div>
                        </div>
                    </div>

                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1} // Show one "row" per Swiper slide
                        loop={true}
                        pagination={{ clickable: true }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="team-grid">
                                    {slide.map((item) => (
                                        <div
                                            key={item.id}
                                            className="team-item wow fadeInUp"
                                            data-wow-delay=".8s"
                                        >
                                            <div className="team-item__thumb mb-40">
                                                <img
                                                    src={item.img}
                                                    alt="team-thumb"
                                                />
                                            </div>
                                            <div className="team-item__content">
                                                <h5 className="team-item__title mb-15">
                                                    <Link href="/team-details">
                                                        {item.name}
                                                    </Link>
                                                </h5>
                                                <span>{item.title}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <style jsx>{`
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 30px;
                }

                .team-item {
                    margin-bottom: 40px;
                }
            `}</style>
        </>
    )
}

export default TeamArea

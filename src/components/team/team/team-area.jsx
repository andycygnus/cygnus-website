import team_one_data from '@/data/team-one-data'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

// Install the Navigation module
SwiperCore.use([Navigation])

const TeamArea = () => {
    const [isLoop, setIsLoop] = useState(false)

    useEffect(() => {
        setIsLoop(true)
    }, [])

    const slides = []
    for (let i = 0; i < team_one_data.length; i += 6) {
        slides.push(team_one_data.slice(i, i + 6))
    }

    if (!isLoop) return null

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

                    <div className="p-relative">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={isLoop}
                            pagination={{ clickable: true }}
                            navigation={{
                                nextEl: '.team-nxt',
                                prevEl: '.team-prv',
                            }}
                            modules={[Navigation]}
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

                        <div className="team-arrow">
                            <div className="team-prv arrow">
                                <i
                                    className="fa-regular fa-arrow-left"
                                    style={{ fontSize: '30px' }}
                                ></i>
                            </div>
                            <div className="team-nxt arrow">
                                <i
                                    className="fa-regular fa-arrow-right"
                                    style={{ fontSize: '30px' }}
                                ></i>
                            </div>
                        </div>
                    </div>
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

                .team-arrow {
                    position: absolute;
                    top: 50%;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    transform: translateY(-50%);
                    z-index: 10;
                }

                .arrow {
                    cursor: pointer;
                    font-size: 20px;
                    background-color: #f2f2f2;
                    width: 60px;
                    height: 60px;
                    padding: 10px;
                    border-radius: 50%;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .team-prv {
                    left: 10px;
                }

                .team-nxt {
                    right: 10px;
                }
            `}</style>
        </>
    )
}

export default TeamArea

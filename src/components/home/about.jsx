import Link from 'next/link'
import React, { useState } from 'react'
import VideoPopup from '@/modules/video-popup'

const About = () => {
    // about content data
    const about_content = {
        about_bg: '/assets/img/shape/shape-bg-05.png',
        about_img: '/assets/img/about/about-bg-02.png',
        popup_video: 'fKhI0iL-OXY',
        about_thumb: '/assets/img/about/about-bg-03.png',
        title: 'Hear What Our Partners Say About Us',
        sub_title: 'About',
        des_1: (
            <>
                Discover the Impact of Our Seamless Payment Solutions: Trusted
                by Businesses Everywhere
            </>
        ),
        dex_2: (
            <>
                Explore firsthand experiences from our valued partners who have
                transformed their businesses with our innovative and secure
                credit card processing services. Learn how our commitment to
                exceptional customer support and cutting-edge technology has
                empowered them to thrive in a competitive marketplace.
            </>
        ),
        btn: 'Talk with Expert',

        // booking data
        booking_bg: '/assets/img/shape/shape-bg-04.png',
        b_sub_title: 'book Free sampling',
        b_title: (
            <>
                Free Sampling at your <br /> Home Adress
            </>
        ),
        b_btn: 'Book Now',
        b_img: '/assets/img/shape/logo-shape-1.png',
    }
    const {
        about_bg,
        about_img,
        popup_video,
        about_thumb,
        sub_title,
        title,
        des_1,
        dex_2,
        btn,
        booking_bg,
        b_sub_title,
        b_title,
        b_btn,
        b_img,
    } = about_content

    const [isVideoOpen, setIsVideoOpen] = useState(false)

    return (
        <>
            <section
                className="about-area grey-bg pt-130 tp-box-space pb-130"
                style={{
                    backgroundImage: `url(${about_bg})`,
                }}
            >
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-12">
                                <div
                                    className="about-thumb text-lg-center p-relative ml-85 mb-60 wow fadeInLeft"
                                    data-wow-delay=".3s"
                                >
                                    <img src={about_img} alt="about-thumb" />
                                    <div className="about-video">
                                        <button
                                            onClick={() => setIsVideoOpen(true)}
                                            className="popup-video"
                                        >
                                            <i className="fa-solid fa-play"></i>
                                        </button>
                                    </div>
                                    <div className="about-thumb-shape d-none d-md-block">
                                        <img
                                            src={about_thumb}
                                            alt="about-shape"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-12">
                                <div
                                    className="about-content ml-60 mb-60 wow fadeInRight"
                                    data-wow-delay=".3s"
                                >
                                    <div className="tp-section">
                                        <span className="tp-section__sub-title left-line mb-25">
                                            {sub_title}
                                        </span>
                                        <h3 className="tp-section__title mb-45">
                                            {title}
                                        </h3>
                                        <i>{des_1}</i>
                                        <p className=" mr-20 mb-35">{dex_2}</p>
                                    </div>
                                    <div className="about-content__btn">
                                        <Link
                                            href="/contact"
                                            className="tp-btn"
                                        >
                                            {btn}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                      {/* video modal start */}
                <VideoPopup
                  isVideoOpen={isVideoOpen}
                  setIsVideoOpen={setIsVideoOpen}
                  videoId={popup_video}
                />
            </section>
        </>
    )
}

export default About

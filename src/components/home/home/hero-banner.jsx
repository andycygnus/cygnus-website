import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const hero_slider = [
  {
    id: 1,
    title: (
      <>
        Honesty,<br/> Transparency<br/> & Convenience
        
      </>
    ),
    des: (
      <>
        Viris lucilius ad quo. In pro nihil aliquam inimicus, munere ique mel in. Posse facer{" "}
        <br /> pertinacia sed, eum phaedrum contentiones et
      </>
    ),
    appointment: "Appointment",
    about: "About us",
    img_1: "/assets/img/slider/slider-bg-1.png",
    img_2: "/assets/img/slider/slider-bg-2.png",
  },
  {
    id: 2,
    title: (
      <>
        Cygnus Payments<br/> is easy to work with!
      </>
    ),
    des: (
      <>
        Viris lucilius ad quo. In pro nihil aliquam inimicus, munere ique mel in. Posse facer{" "}
        <br /> pertinacia sed, eum phaedrum contentiones et
      </>
    ),
    appointment: "Appointment",
    about: "About us",
    img_1: "/assets/img/slider/slider-bg-3.png",
    img_2: "/assets/img/slider/slider-bg-4.png",
  },
];

// slider setting
const setting = {
  // Optional parameters
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".slider-n",
    prevEl: ".slider-p",
  },
};

// social_links
const social_links = [
];
const HeroBanner = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section className="slider-area slider-tp-top pt-100 p-relative">
        <div className="slider-social">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-10 d-none d-md-block">
                <div className="slider-content__social">
                  {social_links.map((link, i) => (
                    <Link
                      key={i}
                      target={link.target}
                      className={link.color}
                      href={link.link}
                    >
                      <i className={link.icon}></i> {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 col-md-2 col-12 d-none d-md-block">
                <div className="slider-content__arrow d-flex align-items-center">
                  <div className="slider-p">
                    <i className="fa-regular fa-arrow-left"></i>
                  </div>
                  <div className="slider-n">
                    <i className="fa-regular fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          loop={isLoop}
          {...setting}
          className="swiper-container tp-slider slider-active"
        >
          {hero_slider.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide bg-white">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12 order-2 order-lg-1">
                      <div className="slider-content pt-60">
                        <h2 className="slider-content__title mb-45">
                          {item.title}
                        </h2>
                        <p>{item.des}</p>
                        <div className="slider-content__btn mb-165">
                          <Link className="tp-btn" href="/contact">
                            {item.appointment}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-2">
                      <div className="slider-content__bg">
                        <img src={item.img_1} alt="slider-img" />
                      </div>
                      <div className="slider-content__shape d-none d-md-block">
                        <img src={item.img_2} alt="slider-shape" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default HeroBanner;

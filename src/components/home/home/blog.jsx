// This page needs to be deleted

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// blog_content
const blog_content = [
  {
    id: 1,
    img: "/assets/img/blog/blog-thumb-04.jpg",
    title: "Coronavirus global health emergency",
    des: "Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...",
    date: "Dec 28, 2022",
    views: "1,526 views",
  },
  {
    id: 2,
    img: "/assets/img/blog/blog-thumb-05.jpg",
    title: "The Healthy Ageing 50 organ (Secound Part)",
    des: "Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...",
    date: "Dec 28, 2022",
    views: "1,526 views",
  },
  {
    id: 3,
    img: "/assets/img/blog/blog-thumb-06.jpg",
    title: "The Healthy Ageing 50 organ (First Part)",
    des: "Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...",
    date: "Dec 28, 2022",
    views: "1,526 views",
  },
];

// blog setting
const setting = {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".blog-nxt",
    prevEl: ".blog-prv",
  },
};
const Blog = () => {

  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
    </>
  );
};

export default Blog;

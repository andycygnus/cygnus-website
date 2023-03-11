import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";



// ts img
const ts_img = [
  {
    img: "assets/img/icon/testi-ava-04.png",
  },
  {
    img: "assets/img/icon/testi-ava-05.png",
  },
  {
    img: "assets/img/icon/testi-ava-06.png",
  },
  {
    img: "assets/img/icon/testi-ava-07.png",
  },
];

 // ts_text
const ts_text = [
  {
    des: (
      <>
        “Bioxlab is another theme that is beautiful and professionally
        constructed by the developers. The price for the template is cheap but
        not the quality of the product. What a bargain. This theme works for
        many types of web sites and seems to be durable. Does not break and its
        easy to work with.
      </>
    ),
    name: "Darlene Robertson",
    title: "Programmer of (FlaxStudio)",
  },
  {
    des: (
      <>
        “Bioxlab is another theme that is beautiful and professionally
        constructed by the developers. The price for the template is cheap but
        not the quality of the product. What a bargain. This theme works for
        many types of web sites and seems to be durable. Does not break and its
        easy to work with.
      </>
    ),
    name: "Courtney Henry",
    title: "Programmer of (FlaxStudio)",
  },
  {
    des: (
      <>
        “Bioxlab is another theme that is beautiful and professionally
        constructed by the developers. The price for the template is cheap but
        not the quality of the product. What a bargain. This theme works for
        many types of web sites and seems to be durable. Does not break and its
        easy to work with.
      </>
    ),
    name: "Kathryn Murphy",
    title: "Manager of (FlaxStudio)",
  },
  {
    des: (
      <>
        “Bioxlab is another theme that is beautiful and professionally
        constructed by the developers. The price for the template is cheap but
        not the quality of the product. What a bargain. This theme works for
        many types of web sites and seems to be durable. Does not break and its
        easy to work with.
      </>
    ),
    name: "Robertson JR",
    title: "CEO of (FlaxStudio)",
  },
];

const bg_style = {
  backgroundImage: `url(/assets/img/shape/shape-bg-05.png)`
};


const Testimonial = ({ bg_img }) => {
  const [isLoop, setIsLoop] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
    </>
  );
};

export default Testimonial;

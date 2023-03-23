import AnswerQuestion from "@/common/answer-question";
import Link from "next/link";
import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



// related product list
const related_product = [
  {
    id: 1,
    img: "/assets/img/shop/shop-09.jpg",
    name: "Sphygmomanometer",
    price: "66.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star",
    ],
  },
  {
    id: 2,
    img: "/assets/img/shop/shop-10.jpg",
    name: "Glucometer",
    price: "46.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star",
    ],
  },
  {
    id: 3,
    img: "/assets/img/shop/shop-11.jpg",
    name: "Oxygen Breathing Machine",
    price: "70.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
  },
  {
    id: 4,
    img: "/assets/img/shop/shop-12.jpg",
    name: "Oxygen Breathing Machine",
    price: "70.00",
    ratting: [
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
    ],
  },
];
// slider setting
const setting = {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
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
};

// product_item_list data
  const product_item_list = [

  ];

const ProductDetailsArea = () => {
  const [productCount, setProductCount] = useState(1);
  const addBtn = () => {
    setProductCount((prev) => prev + 1);
  };
  const minusBtn = () => {
    if (productCount >= 1) {
      setProductCount((prev) => prev - 1);
    }
  };

  // product_review
  const product_review = [
    {
      id: 1,
      img: "/assets/img/shop/reviewer-01.png",
      name: "Siarhei Dzenisenka",
      date: "March 27, 2018 9:51 am",
      rating: [
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fal fa-star",
      ],
      des: (
        <>
          This is cardigan is a comfortable warm classic piece. Great to layer
          with a light top and you can dress up or down given the jewel buttons.{" "}
          {`I'm 5'8”`} 128lbs a 34A and the Small fit fine.
        </>
      ),
    },
    {
      id: 2,
      img: "/assets/img/shop/reviewer-02.png",
      name: "Tommy Jarvis",
      date: "March 27, 2018 9:51 am",
      rating: [
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fal fa-star",
      ],
      des: (
        <>
          This is cardigan is a comfortable warm classic piece. Great to layer
          with a light top and you can dress up or down given the jewel buttons.{" "}
          {`I'm 5'8”`} 128lbs a 34A and the Small fit fine.
        </>
      ),
    },
    {
      id: 3,
      img: "/assets/img/shop/reviewer-03.png",
      name: "Johnny Cash",
      date: "March 27, 2018 9:51 am",
      rating: [
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fal fa-star",
      ],
      des: (
        <>
          This is cardigan is a comfortable warm classic piece. Great to layer
          with a light top and you can dress up or down given the jewel buttons.{" "}
          {`I'm 5'8”`} 128lbs a 34A and the Small fit fine.
        </>
      ),
    },
  ];

  return (
    <>
      <section className="shop-area pt-120 pb-70">
        <div className="container">
          <div className="shop-left-right ml-130 mr-130">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div
                  className="productthumb mb-40 wow fadeInRighLeft"
                  data-wow-delay=".4s"
                >
                  <img
                    src="/assets/img/shop/pos/jmsc.png"
                    alt="product-thumb"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="product mb-40 ml-20 wow fadeInRighRight"
                  data-wow-delay=".4s"
                >
                  <div className="product__details-content mb-40">
                    <h5 className="product-dtitle mb-20">JMSC POS</h5>
                    <p>
                          Change the way your point of sales terminal provides services to the customers of your store! 
                          With powerful retail technology at the core of our system, revolutionize the way your store functions! 
                          User-friendly touch screen displays now fully-integrated into the JMSC POS® System helps increase competitive edge, 
                          reduce inventory delays, improve sales, maximize productivity, and enhance the customers’ experience across all retail 
                          and hospitality environments!
                    </p>
                    <div className="pro-quan-area d-sm-flex align-items-center mb-15">
                    </div>
                    <div className="product-button">
                      <a href="https://jmscpos.com/" target="_blank" rel="noopener noreferrer">
                        <button className="tp-btn mr-20">Visit JMSC</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="productdetails pt-35 pb-75">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product-additional-tab">
                    <div className="pro-details-nav mb-40">
                      <ul
                        className="nav nav-tabs pro-details-nav-btn"
                        id="myTabs"
                        role="tablist"
                      >
                        {product_item_list.map((item) => (
                          <li
                            key={item.id}
                            className="nav-item"
                            role="presentation"
                          >
                            <button
                              className={`nav-links ${item.active}`}
                              id={item.li_id}
                              data-bs-toggle="tab"
                              data-bs-target={`#${item.data_bs_target}`}
                              type="button"
                              role="tab"
                              aria-controls={item.aria_controls}
                              aria-selected={item.aria_selected}
                            >
                             {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="tab-content tp-content-tab"
                      id="myTabContent-2"
                    ></div>
                    <div
                      className="tab-content tp-content-tab"
                      id="myTabContent-2"
                    >
                      <div
                        className="tab-para tab-pane fade show active"
                        id="home-1"
                        role="tabpanel"
                        aria-labelledby="home-tab-1"
                      >
                      </div>
                      <div
                        className="tab-pane fade"
                        id="additional-information"
                        role="tabpanel"
                        aria-labelledby="information-tab"
                      >
                      </div>
                      <div
                        className="tab-pane fade"
                        id="reviews"
                        role="tabpanel"
                        aria-labelledby="reviews-tab"
                      >
                      </div>
                      <div
                        className="tab-pane fade"
                        id="chart"
                        role="tabpanel"
                        aria-labelledby="size-chart-tab"
                      >
                        <div className="shop-faq">
                          <AnswerQuestion />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsArea;

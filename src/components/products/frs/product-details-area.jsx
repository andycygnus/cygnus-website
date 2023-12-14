import AnswerQuestion from '@/common/answer-question'
import Link from 'next/link'
import React, { useState } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'


// product_item_list data
const product_item_list = []

const ProductDetailsArea = () => {
    const [productCount, setProductCount] = useState(1)
    const addBtn = () => {
        setProductCount((prev) => prev + 1)
    }
    const minusBtn = () => {
        if (productCount >= 1) {
            setProductCount((prev) => prev - 1)
        }
    }

    return (
        <>
            <section className="shop-area pt-120 pb-70">
                <div className="container">
                    <div className="shop-left-right ml-130 mr-130">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="productthumb mb-40 wow fadeInRighLeft" data-wow-delay=".4s">
                                    <img
                                        src="/assets/img/products/frs/frs.jpg"
                                        alt="product-thumb"
                                        style={{ width: '89%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '65px' }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="product mb-40 ml-20 wow fadeInRighRight" data-wow-delay=".4s">
                                    <div className="product__details-content mb-40">
                                        <h5 className="product-dtitle mb-20">
                                            Are you eligible for the FRS?
                                        </h5>
                                        <ul>
                                            <li style={{ marginBottom: '20px' }}>The trusted ally in loss remediation across diverse industries. FRS excels in servicing key market segments, including BankCard, Retail, Installment Loan, Service Contracts, and Utilities. With a proven track record in placement levels ranging from Early-Out to Warehouse, FRS sets itself apart in the collection industry. Embracing cutting-edge technologies like EDI and automated processing, Financial Recovery Services effortlessly accommodates individual client placement volumes. What makes us unique is our ability to manage this diverse array of services equally, thanks to the breadth and experience of our most valuable resource—our people, collectively bringing centuries of expertise to the table.</li>
                                            <li style={{ marginBottom: '20px' }}>Here's an exclusive opportunity: if you accepted payments between January 1, 2004, and January 25th, 2019, seize the six-month window to sign up and participate in the settlement process. Excitingly, Cygnus Payments proudly announces a strategic partnership with FRS. As leaders in loss remediation, this collaboration enhances our capabilities and ensures a comprehensive approach to financial recovery. Together with FRS, Cygnus Payments is committed to providing unparalleled solutions in the payment industry.</li>
                                        </ul>
                                        <div className="pro-quan-area d-sm-flex align-items-center mb-15"></div>
                                        <div className="product-button">
                                            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                                                <button className="tp-btn mr-20">
                                                    Click Here To Complete Survey
                                                </button>
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
                                                {product_item_list.map(
                                                    (item) => (
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
                                                                aria-controls={
                                                                    item.aria_controls
                                                                }
                                                                aria-selected={
                                                                    item.aria_selected
                                                                }
                                                            >
                                                                {item.title}
                                                            </button>
                                                        </li>
                                                    )
                                                )}
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
                                            ></div>
                                            <div
                                                className="tab-pane fade"
                                                id="additional-information"
                                                role="tabpanel"
                                                aria-labelledby="information-tab"
                                            ></div>
                                            <div
                                                className="tab-pane fade"
                                                id="reviews"
                                                role="tabpanel"
                                                aria-labelledby="reviews-tab"
                                            ></div>
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
    )
}

export default ProductDetailsArea

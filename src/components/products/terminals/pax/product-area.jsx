import pax_data from '@/data/products/terminals/pax-data'
import NiceSelect from '@/ui/nice-select'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { useCallback } from 'react'

const ProductArea = () => {
    const selectHandler = (e) => { }
    const router = useRouter();

    // const moveToProductDetail = useCallback((id) => {
    //     router.push(`/productDetail/${id}`)
    // }, [router]);

    return (
        <>
            <div className="shop-area pt-50 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Terminal Solutions</h1>
                            <div className="contactform mb-60 mt-40">
                                <form
                                    id="contact-form"
                                    method="post"
                                >
                                    <div className="row text-center justify-content-center">
                                        <div className="col-lg-6">
                                            <div className="product-search contactform__input position-relative">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    placeholder="Search your product here"
                                                />
                                                <div className='text-primary'>
                                                    <i class="fa-light fa-search fa-lg"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <ul className="nav tp-nav-tavs right-border mb-70 flex-column gap-4" id="myTab" role="tablist">
                                <li className="w-100 nav-item" role="presentation">
                                <button
                                    className="w-100 nav-link"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="home-tab-pane"
                                    aria-selected="false"
                                    tabIndex="-1"
                                >
                                   <img src="http://localhost:3000/assets/img/logo/logo.png" height="40px" alt="" />
                                </button>
                                </li>
                                <li className="w-100 nav-item" role="presentation">
                                <button
                                    className="w-100 nav-link active"
                                    id="mission-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#mission-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="mission-tab-pane"
                                    aria-selected="true"
                                    tabIndex="-1"
                                >
                                    <img src="http://localhost:3000/assets/img/logo/logo.png" height="40px" alt="" />
                                </button>
                                </li>
                                <li className="w-100 nav-item" role="presentation">
                                <button
                                    className="w-100 nav-link"
                                    id="connection-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#connection-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="connection-tab-pane"
                                    aria-selected="false"
                                    tabIndex="-1"
                                >
                                    <img src="http://localhost:3000/assets/img/logo/logo.png" height="40px" alt="" />
                                </button>
                                </li>
                                <li className="w-100 nav-item" role="presentation">
                                <button
                                    className="w-100 nav-link"
                                    id="connection-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#connection-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="connection-tab-pane"
                                    aria-selected="false"
                                    tabIndex="-1"
                                >
                                    <img src="http://localhost:3000/assets/img/logo/logo.png" height="40px" alt="" />
                                </button>
                                </li>
                                <li className="w-100 nav-item" role="presentation">
                                <button
                                    className="w-100 nav-link"
                                    id="connection-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#connection-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="connection-tab-pane"
                                    aria-selected="false"
                                    tabIndex="-1"
                                >
                                    <img src="http://localhost:3000/assets/img/logo/logo.png" height="40px" alt="" />
                                </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8 col-lg-9">
                            <div className="row">
                            {pax_data.map((item) => (
                                
                                <div
                                    key={item.id}
                                    className="col-xl-4 col-lg-4 col-md-6"
                                    // onClick={moveToProductDetail(item.id)}
                                >
                                    <div
                                        className="tpshopitem mb-50 wow fadeInUp"
                                        data-wow-delay=".6s"
                                        
                                    >
                                        <div className="tpshopitem__thumb p-relative fix p-relative mb-35">
                                                <img
                                                    src={item.img}
                                                    alt="shop-thumb"
                                                />
                                        </div>
                                        <div className="tpshopitem__content text-center">
                                            <span className="tpshopitem__title mb-0">
                                                <h4>{item.title}</h4>
                                            </span>
                                            <span className="tpshopitem__title mb-5">
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                            ))}
                            </div>
                        </div>
                    </div>


                    <div className="row gx-5">
                        <div className="col-lg-6 col-xl-5">
                            <div className="tpshopitem__thumb p-relative fix p-relative mb-35">
                                <img src="http://localhost:3000/assets/img/shop/pax/product-01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <img src="http://localhost:3000/assets/img/logo/logo.png" height="40px" alt="" />
                            <h1 className='mt-20 mb-30'>Dejavoo QD4 Desktop Android Bluetooth, IP & WiFi</h1>
                            <p>Introducing the Dejavoo QD4, the ultimate mobile payment terminal designed for businesses on the go. With its sleek design, state-of-the-art security features, and compatibility with various payment methods, the QD4 is a must-have for any entrepreneur looking to streamline their payment processes.</p>
                            
                            <ul className="nav tp-nav-tavs mt-40 nav-fill" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                <button
                                    className="w-100 nav-link"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#key-features"
                                    type="button"
                                    role="tab"
                                    aria-controls="key-features"
                                    aria-selected="false"
                                    tabIndex="-1"
                                >
                                    KEY FEATURES
                                </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button
                                    className="w-100 nav-link active"
                                    id="mission-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#specifications"
                                    type="button"
                                    role="tab"
                                    aria-controls="specifications"
                                    aria-selected="true"
                                    tabIndex="-1"
                                >
                                    SPECIFICATIONS
                                </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button
                                    className="w-100 nav-link"
                                    id="connection-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#ask-a-question"
                                    type="button"
                                    role="tab"
                                    aria-controls="ask-a-question"
                                    aria-selected="false"
                                    tabIndex="-1"
                                >
                                    ASK A QUESTION
                                </button>
                                </li>
                            </ul>

                            <div className="tab-content pt-30" id="myTabContent">
                                <div
                                className="tab-pane fade show active"
                                id="key-features"
                                role="tabpanel"
                                aria-labelledby="key-features"
                                >
                                    <ul className='list-style-number pl-20'>
                                        <li>Versatile Payment Options</li>
                                        <li>Lightning-fast Processing</li>
                                        <li>Robust Security Feature</li>
                                        <li>User-friendly Interface</li>
                                        <li>Compact and Portable</li>
                                        <li>Seamless Integration</li>
                                    </ul>
                                </div>
                                <div
                                className="tab-pane fade"
                                id="specifications"
                                role="tabpanel"
                                aria-labelledby="specifications"
                                >
                                    <ul className='list-style-disc pl-20'>
                                        <li>Versatile Payment Options</li>
                                        <li>EMV and NFC Contactless Built In – EMV 4.x L1 and L2 certified</li>
                                        <li>Quad-Core @ 1.1GHz</li>
                                        <li>Ethernet, WiFi, USB</li>
                                        <li>Large touch screen</li>
                                    </ul>
                                </div>
                                <div
                                className="tab-pane fade"
                                id="ask-a-question"
                                role="tabpanel"
                                aria-labelledby="ask-a-question"
                                >
                                    <div className="contactform mb-60">
                                        <form
                                            id="contact-form"
                                            method="post"
                                        >
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="contactform__input mb-30">
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            placeholder="Enter your Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="contactform__input mb-30">
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            placeholder="Enter your mail"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="contactform__input mb-30">
                                                        <textarea
                                                            name="message"
                                                            placeholder="Type your comment"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="contactform__input mb-30-btn">
                                                        <button
                                                            id="button"
                                                            type="submit"
                                                            className="tp-btn w-100"
                                                        >
                                                            Send Message
                                                        </button>
                                                    </div>
                                                    <p className="ajax-response"></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductArea

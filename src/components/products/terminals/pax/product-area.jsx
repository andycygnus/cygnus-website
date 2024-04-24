import pax_data from '@/data/products/terminals/pax-data'
import NiceSelect from '@/ui/nice-select'
import Link from 'next/link'
import React from 'react'

const ProductArea = () => {
    const selectHandler = (e) => { }
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


                    <div className="row">
                        <div className="col-lg-6">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductArea

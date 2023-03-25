import Link from 'next/link'
import React from 'react'
import { term_home } from '@/data/team-home-2'

const TerminalsArea = () => {
    const selectHandler = (e) => {}
    return (
        <>
            <div className="shop-area pt-50 pb-130">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        {term_home.map((item) => (
                            <div
                                key={item.id}
                                className="col-xl-3 col-lg-4 col-md-4"
                            >
                                <div
                                    className="tpshopitem mb-50 wow fadeInUp"
                                    data-wow-delay=".6s"
                                >
                                    <div className="tpshopitem__thumb p-relative fix p-relative mb-35">
                                        <Link href={item.links}>
                                            <img
                                                src={item.img}
                                                alt="shop-thumb"
                                            />
                                        </Link>
                                    </div>
                                    <div className="tpshopitem__content text-center">
                                        <span className="tpshopitem__title mb-5">
                                            <Link href="/product-details">
                                                {item.title}
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TerminalsArea

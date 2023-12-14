import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <>
            <section
                className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
                style={{
                    backgroundImage: `url(/assets/img/banner/frs.png)`,
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                            <div className="tp-breadcrumb">
                                <h2 className="tp-breadcrumb__title">Financial Recovery Services</h2>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-12 col-md-12 col-12">
                            <div className="tp-breadcrumb__link text-xl-end"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner

import MobileMenus from '@/layout/header/mobile-menus'
import Link from 'next/link'
import React, { useState } from 'react'

const images = [
    {
        img: '/assets/img/blog/blog-in-01.jpg',
    },
    {
        img: '/assets/img/blog/blog-in-02.jpg',
    },
    {
        img: '/assets/img/blog/blog-in-03.jpg',
    },
]

const Sidebar = ({ isActive, setIsActive }) => {
    // photoIndex
    const [photoIndex, setPhotoIndex] = useState(null)
    // image open state
    const [isOpen, setIsOpen] = useState(false)
    // handleImagePopup
    const handleImagePopup = (i) => {
        setPhotoIndex(i)
        setIsOpen(true)
    }
    //  images
    const img = images.map((item) => item.img)

    return (
        <>
            <div
                className={`tpsideinfo tp-side-info-area theme-bg ${
                    isActive ? 'tp-sidebar-opened' : ''
                }`}
            >
                <button
                    onClick={() => setIsActive(false)}
                    className="tpsideinfo__close"
                >
                    <i className="fal fa-times"></i>
                </button>
                <div className="tpsideinfo__logo mb-40">
                    <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="logo" />
                    </Link>
                </div>

                <div className="mobile-menu mean-container d-block d-lg-none">
                    <div className="mean-bar">
                        <MobileMenus />
                    </div>
                </div>
                <div className="header-cart-order d-flex align-items-center mt-25">
                    <Link className="header-bottom-btn" href="/quote">
                        Get a Quote
                    </Link>
                </div>

                <div className="tpsideinfo__content mb-0">
                    <span>Contact Us</span>
                    <a href="#">
                        2100 Reston Pkwy Suite 415
                        <br />
                        Reston, VA 20191
                    </a>
                    <a href="tel:8442003277">(844)200-3277</a>
                    <a href="mailto:sales@cygnuspay.com">sales@cygnuspay.com</a>
                </div>
                <div className="tpsideinfo__socialicon">
                    <a href="https://www.linkedin.com/company/cygnuspayments/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/cygnuspayments/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>

            <div
                onClick={() => setIsActive(false)}
                className={`body-overlay ${isActive ? 'opened' : ''}`}
            ></div>

            {/* image light box start */}
            {isOpen && (
                <ImagePopup
                    images={img}
                    setIsOpen={setIsOpen}
                    photoIndex={photoIndex}
                    setPhotoIndex={setPhotoIndex}
                />
            )}
            {/* image light box end */}
        </>
    )
}

export default Sidebar

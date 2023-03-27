import SocialLinks from '@/common/social-links'
import Link from 'next/link'
import React from 'react'

const footer_content = {
    footer_info: [
        {
            id: 1,
            title: 'Useful links',
            cls: 'footer-col-2',
            links: [
                { name: 'Contact Us', link: '/contact' },
                { name: 'About us', link: '/about' },
                {
                    name: 'Careers',
                    link: 'https://apply.workable.com/cygnus-pay-careers/?lng=en',
                },
            ],
        },
        {
            id: 2,
            title: 'Contact info',
            cls: 'footer-col-3',
            links: [
                { 
                  name: '2100 Reston Pkwy STE 415\nReston, VA 20191' ,
                  link: 'https://www.google.com/maps/place/2100+Reston+Pkwy+%23415,+Reston,+VA+20191',
                  target: "_blank"
                },
                { name: '(844) 200-3277' },
                { name: 'sale@cygnuspay.com' },
                { name: 'Office Hours: 9AM EST - 6:30PM EST' },
                { name: 'Monday - Friday' },
            ],
        },
    ],
    contact_info: [
        {
            id: 1,
            title: 'Quick Links',
            support_info: [
                ' 2100 Reston Pkwy STE 415, Reston, VA 20191',
                '(+844)200-3277',
                ' sale@cygnuspay.com',
            ],
            office_time: 'Office Hours: 9AM EST - 6:30PM EST',
            off_day: ' Friday - Wekend Day',
        },
    ],
    copy_right_text: (
        <>
            © Copyright © {new Date().getFullYear()}
            <Link href="/"> Theme_pure</Link>.
            <i> All Rights Reserved Copyright</i>
        </>
    ),
}

const { footer_info, copy_right_text } = footer_content
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-area theme-bg pt-100 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div
                                    className="footer-widget footer-col-1 mb-50 wow fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <h4 className="footer-widget__title mb-30">
                                        <a href="index">
                                            <img
                                                src="/assets/img/logo/logo.png"
                                                alt="logo"
                                            />
                                        </a>
                                    </h4>
                                    <div className="footer-widget__social">
                                        <SocialLinks />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6"></div>
                            {footer_info.map((item) => (
                                <div
                                    key={item.id}
                                    className="col-xl-3 col-lg-3 col-md-6"
                                >
                                    <div
                                        className={`footer-widget ${item.cls} mb-50 wow fadeInUp`}
                                        data-wow-delay=".4s"
                                    >
                                        <h4 className="footer-widget__title mb-20">
                                            {item.title}
                                        </h4>
                                        <div className="footer-widget__links">
                                            <ul>
                                                {item.links.map((link, i) => (
                                                    <li key={i}>
                                                        <Link
                                                            href={`${
                                                                link?.link
                                                                    ? link.link
                                                                    : '/'
                                                            }`}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-2 mb-50 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="footer-widget__title mb-20">Useful links</h4>
                  <div className="footer-widget__links">
                    <ul>
                      <li>
                        <Link href="/contact">Contact us</Link>
                      </li>
                      <li>
                        <Link href="/about">About us</Link>
                      </li>
                      <li>
                        <Link href="/services-details">Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-3 mb-50 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="footer-widget__title mb-20">Contact info</h4>
                  <div className="footer-widget__info">
                    <ul>
                      <li>
                        <a href="https://www.google.com/maps/place/2100+Reston+Pkwy+%23415,+Reston,+VA+20191" target="_blank">
                          2100 Reston Pkwy Suite 415, <br />Reston, VA 20191
                        </a>
                      </li>
                      <li>
                        <a href="tel:+8442003277">(844)200 3277</a>
                      </li>
                      <li>
                        <a href="mailto:sales@cygnuspay.com">
                          sales@cygnuspay.com
                        </a>
                      </li>
                      <li>
                        Office Hours:<br />
                        9AM EST - <br />
                        6:30PM EST
                      </li>
                      <li>Monday - Friday</li>
                    </ul>
                  </div>
                </div>
              </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="footer-area-bottom theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright">
                  <span>{copy_right_text}</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright-info info-direction">
                  <ul className="d-flex align-items-center">
                    <li>
                      <a href="#">Terms and conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
            </footer>
        </>
    )
}

export default Footer

import Link from 'next/link'
import React from 'react'
import Quote from '../forms/quote'

const sendEmail = (e) => {
    e.preventDefault() // prevents the page from reloading when you hit “Send”

    emailjs
        .sendForm(
            'cygnus_email',
            'cygnus_email_template',
            form.current,
            'i17TpKkycbJFV1O6x'
        )
        .then(
            (result) => {
                // show the user a success message
            },
            (error) => {
                // show the user an error
            }
        )
}

// const { address, phone_1, open } = contact_info;
const QuoteForm = () => {
    return (
        <>
            <section className="contact-area pt-130 pb-115">
                <div className="container">
                    <div className="row">
                        {/* <div
              className="col-lg-4 col-md-5 col-12 wow fadeInLeft"
              data-wow-delay=".4s"
            >
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-01.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Address line</h4>
                    <span>
                      <Link href="https://www.google.com/maps/place/2100+Reston+Pkwy+%23415,+Reston,+VA+20191" target="_blank">{address}</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-02.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Phone Number</h4>
                    <span>
                      <a href={`tel:${phone_1}`}>{phone_1}</a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-03.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Office Hours</h4>
                    <span>{open}</span>
                  </div>
                </div>
              </div>
            </div> */}
                        <div className="col-lg-12 col-md-7 col-12">
                            <div
                                className="contactform wow fadeInRight"
                                data-wow-delay=".4s"
                            >
                                <h4 className="contactform__title mb-35">
                                    Receive Your Personalized Quote :
                                </h4>
                                <Quote />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuoteForm

import Link from "next/link";
import React from "react";
import ContactUs from "../forms/contact-us";


// contact_info
const contact_info = {
  address: (
    <>
      2100 Reston Pkwy Suite 415 <br />
      Reston, VA 20191
    </>
  ),
  phone_1: "(844) 200-3277",
  open: (
    <>
      Monday - Friday <br />
      09:00 AM EST - <br />
      06:30 PM EST
    </>
  ),
};

const { address, phone_1, open } = contact_info;
const ContactForm = () => {
  return (
    <>
      <section className="contact-area pt-130 pb-115">
        <div className="container">
          <div className="row">
            <div
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
                      <Link href="https://www.google.com/maps/place/2100+Reston+Pkwy+%23415,+Reston,+VA+20191">{address}</Link>
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
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="contactform wow fadeInRight" data-wow-delay=".4s">
                <h4 className="contactform__title mb-35">
                  Send us a Message :
                </h4>
                <ContactUs />

                <div className="row">
                  <div className="col-lg-12">
                    <div className="tpcontactmap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.1243231258954!2d-77.3615062!3d38.9439881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6481365a8382f%3A0xda596cc0ea2ba7b!2s2100%20Reston%20Pkwy%20%23415%2C%20Reston%2C%20VA%2020191!5e0!3m2!1sen!2sus!4v1678649302283!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
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

export default ContactForm;

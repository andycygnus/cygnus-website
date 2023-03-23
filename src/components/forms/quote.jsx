import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Quote = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    const btn = document.getElementById('button');

    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    btn.value = 'Sending...';
  
    emailjs.sendForm('cygnus_email', 'quote_template', form.current, 'i17TpKkycbJFV1O6x')
      .then((result) => {
          // show the user a success message
          alert('Thank you for your submission. We will get back to you with an estimately quote!');
          window.location.href = "/";
      }, (error) => {
          // show the user an error
          btn.value = 'Send Email';
          alert(JSON.stringify(error));
      });
  };

  return (
    <>
      <div className="contactform__list mb-60">
        <form ref={form} onSubmit={sendEmail} id="contact-form" method="post">
          <div className="row">
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input name="name" type="text" placeholder="Full Name" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30">
                <input
                  name="dba"
                  type="text"
                  placeholder="DBA (Doing Business As)"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="number"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="website"
                  type="text"
                  placeholder="Website Address"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="lastVolume"
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="Enter your last month's processing volume"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="totalFeePaid"
                  type="number"
                  
                  min="0.01"
                  step="0.01"
                  placeholder="Enter your last month's total fee"
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
                <button id='button' type="submit" className="tp-btn">
                  Send for Quote
                </button>
              </div>
              <p className="ajax-response"></p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Quote;

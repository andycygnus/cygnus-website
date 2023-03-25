import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactUs = () => {
    const form = useRef()

    const sendEmail = (e) => {
        const btn = document.getElementById('button')

        e.preventDefault() // prevents the page from reloading when you hit “Send”

        btn.value = 'Sending...'

        emailjs
            .sendForm(
                'cygnus_email',
                'inquiry_template',
                form.current,
                'i17TpKkycbJFV1O6x'
            )
            .then(
                (result) => {
                    // show the user a success message
                    alert(
                        'Thank you for your submission. A member of our team will get back to you shortly!'
                    )
                    window.location.href = '/'
                },
                (error) => {
                    // show the user an error
                    btn.value = 'Send Email'
                    alert(JSON.stringify(error))
                }
            )
    }

    return (
        <>
            <div className="contactform__list mb-60">
                <form
                    ref={form}
                    onSubmit={sendEmail}
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
                        <div className="col-lg-6">
                            <div className="contactform__input mb-30">
                                <input
                                    name="number"
                                    type="text"
                                    placeholder="Enter your number"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contactform__input mb-30">
                                <input
                                    name="website"
                                    type="text"
                                    placeholder="Enter your website"
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
                                    className="tp-btn"
                                >
                                    Send Massage
                                </button>
                            </div>
                            <p className="ajax-response"></p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactUs

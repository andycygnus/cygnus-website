import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import React from 'react'
import DirectContactUs from '../forms/direct-contact-us'
import FaqArea from './faq-area'
import FaqBanner from './faq-banner'

const FAQ = () => {
    return (
        <>
            <Header />
            <FaqBanner />
            <FaqArea />
            <DirectContactUs />
            <Footer />
        </>
    )
}

export default FAQ

import DirectContactUs from '@/components/forms/direct-contact-us'
import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import React from 'react'
import Banner from './banner'
import ServiceDetailsArea from './service-details-area'

const ServiceDetails = () => {
    return (
        <>
            <Header />
            <Banner />
            <ServiceDetailsArea />
            <DirectContactUs />
            <Footer />
        </>
    )
}

export default ServiceDetails

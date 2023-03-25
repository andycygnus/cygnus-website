import PricingArea from '@/common/pricing-area'
import Specialists from '@/common/specialists'
import DirectContactUs from '@/components/forms/direct-contact-us'
import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import React from 'react'
import Banner from './banner'
import ServiceArea from './service-area'

const ServiceOne = () => {
    return (
        <>
            <Header />
            <Banner />
            <ServiceArea />
            <Specialists />
            <PricingArea />
            <DirectContactUs />
            <Footer />
        </>
    )
}

export default ServiceOne

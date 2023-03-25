import PricingArea from '@/common/pricing-area'
import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import React from 'react'
import DirectContactUs from '../forms/direct-contact-us'
import BannerPricing from './banner-pricing'

const PricingPlan = () => {
    return (
        <>
            <Header />
            <BannerPricing />
            <PricingArea dark={false} />
            <PricingArea dark={true} />
            <DirectContactUs />
            <Footer />
        </>
    )
}

export default PricingPlan

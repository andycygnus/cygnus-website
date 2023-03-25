import Counter from '@/common/counter'
import Header from '@/layout/header/header'
import React from 'react'
import AboutArea from './about-area'
import Banner from './banner'
import Specialists from '@/common/specialists'
import NavTab from '@/common/nav-tab'
import Footer from '@/layout/footer/footer'

const About = () => {
    return (
        <>
            <Header />
            <Banner />
            <AboutArea />
            <Counter />
            <Specialists />
            <NavTab />
            <Footer />
        </>
    )
}

export default About

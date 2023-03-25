import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import React from 'react'
import PosBanner from './pos-banner'
import PosArea from './pos-area'

const Pos = () => {
    return (
        <>
            <Header />
            <PosBanner />
            <PosArea />
            <Footer />
        </>
    )
}

export default Pos

import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import React from 'react'
import CartArea from './cart-area'
import CartBanner from './cart-banner'

const Cart = () => {
    return (
        <>
            <Header />
            <CartBanner />
            <CartArea />
            <Footer />
        </>
    )
}

export default Cart

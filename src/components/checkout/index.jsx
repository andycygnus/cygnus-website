import Footer from '@/layout/footer/footer';
import Header from '@/layout/header/header';
import React from 'react';
import CheckoutArea from './checkout-area';
import CheckoutBanner from './checkout-banner';

const Checkout = () => {
    return (
        <>
            <Header />
            <CheckoutBanner />
            <CheckoutArea />
            <Footer />
            
        </>
    );
};

export default Checkout;
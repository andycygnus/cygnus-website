import ProductDetails from '@/components/products/pos/jmscpos'
import SEO from '@/components/seo'
import Wrapper from '@/layout/wrapper'
import React from 'react'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Product Details" />
            <ProductDetails />
        </Wrapper>
    )
}

export default index

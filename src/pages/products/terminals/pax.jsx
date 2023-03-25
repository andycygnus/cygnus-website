import SEO from '@/components/seo'
import Product from '@/components/products/terminals/pax'
import Wrapper from '@/layout/wrapper'
import React from 'react'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="PAX" />
            <Product />
        </Wrapper>
    )
}

export default index

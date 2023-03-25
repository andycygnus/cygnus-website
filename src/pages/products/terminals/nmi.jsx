import SEO from '@/components/seo'
import Product from '@/components/products/terminals/nmi'
import Wrapper from '@/layout/wrapper'
import React from 'react'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="NMI Gateway" />
            <Product />
        </Wrapper>
    )
}

export default index

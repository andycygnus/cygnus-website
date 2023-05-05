import Home from '@/components/terms/terms'
import SEO from '@/components/seo'
import Layout from '@/layout/layout'
import Wrapper from '@/layout/wrapper'
import React from 'react'

const index = () => {
    return (
        <Wrapper>
            <Layout>
                <SEO pageTitle="Terms" />
                <Home />
            </Layout>
        </Wrapper>
    )
}

export default index

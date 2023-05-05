import Home from '@/components/privacy/privacy'
import SEO from '@/components/seo'
import Layout from '@/layout/layout'
import Wrapper from '@/layout/wrapper'
import React from 'react'

const index = () => {
    return (
        <Wrapper>
            <Layout>
                <SEO pageTitle="Privacy" />
                <Home />
            </Layout>
        </Wrapper>
    )
}

export default index

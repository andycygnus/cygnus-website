import Feedisclaimer2024 from '@/components/feedisclaimer2024/feedisclaimer2024'
import SEO from '@/components/seo'
import Wrapper from '@/layout/wrapper'
import React from 'react'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="feedisclaimer2024" />
            <Feedisclaimer2024 />
        </Wrapper>
    )
}

export default index

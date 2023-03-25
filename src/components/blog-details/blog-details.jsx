import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import React from 'react'
import Banner from './banner'
import PostBoxDetails from './post-box-details'

const BlogDetails = () => {
    return (
        <>
            <Header />
            <Banner />
            <PostBoxDetails />
            <Footer />
        </>
    )
}

export default BlogDetails

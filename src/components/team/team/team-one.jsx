import DirectContactUs from '@/components/forms/direct-contact-us'
import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import React from 'react'
import BannerTeamOne from './banner-team-one'
import TeamArea from './team-area'

const TeamOne = () => {
    return (
        <>
            <Header />
            <BannerTeamOne />
            <TeamArea />
            <Footer />
        </>
    )
}

export default TeamOne

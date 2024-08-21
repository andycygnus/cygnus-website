import DirectContactUs from '@/components/forms/direct-contact-us'
import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import React from 'react'
import BannerTeamOne from './banner-team-one'
import TeamArea from './team-area'
import TeamAreaMobile from './teams-area-mobile'

import useMobileDetector from '../../../../hooks/useMobileDetector'

const TeamOne = () => {
    const isMobile = useMobileDetector()
    const TeamComponent = isMobile ? TeamAreaMobile : TeamArea
    return (
        <>
            <Header />
            <BannerTeamOne />
            <TeamComponent />
            <Footer />
        </>
    )
}

export default TeamOne

import dynamic from 'next/dynamic';
import Brands from '@/common/brands';
import Counter from '@/common/counter';
import React from 'react';
import About from './about';
import Choose from './choose';
import HeroBanner from './hero-banner';
import useMobileDetector from '../../../hooks/useMobileDetector';

const Team = dynamic(() => import('./team'));
const TeamMobile = dynamic(() => import('./team-mobile'));
const MobileHeroBanner = dynamic(() => import('./mobile-hero-banner'));
const CounterMobile = dynamic(() => import('@/common/counter-mobile'));

const HomeTwo = () => {
  const isMobile = useMobileDetector();
  const TeamComponent = isMobile ? TeamMobile : Team;
  const HeroBannerComponent = isMobile ? MobileHeroBanner : HeroBanner;
  const CounterComponent = isMobile ? CounterMobile : Counter;

  return (
    <>
      <HeroBannerComponent />
      <About />
      <TeamComponent />
      <CounterComponent /> {/* Modify this line */}
      <Choose />
      <Brands border_style={true} />
    </>
  );
};

export default HomeTwo;


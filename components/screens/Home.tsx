import React from 'react';
import HeroTitle from '@/components/ui/HeroTitile/HeroTitile';
import FeaturesCards from '@/components/ui/Features/Features';
import SectionPersonalPrice from '@/components/ui/SectionPrice/SectionPersonalPrice';
import SectionPrice from '@/components/ui/SectionPrice/SectionPrice';

const Home = () => (
  <>
    <HeroTitle />
    <FeaturesCards />
    <SectionPersonalPrice />
    <SectionPrice />
  </>
);

export default Home;

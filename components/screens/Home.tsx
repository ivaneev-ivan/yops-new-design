import React, { FC } from 'react';
import HeroTitle from '@/components/ui/HeroTitile/HeroTitile';
import FeaturesCards from '@/components/ui/Features/Features';
// import SectionPersonalPrice from '@/components/ui/SectionPrice/SectionPersonalPrice';
import SectionPrice from '@/components/ui/SectionPrice/SectionPrice';
import { Service } from '@/components/types';

const Home: FC<{ services: Service[] }> = ({ services }) => (
  <>
    <HeroTitle />
    <FeaturesCards />
    {/*<SectionPersonalPrice />*/}
    <SectionPrice services={services} />
  </>
);

export default Home;

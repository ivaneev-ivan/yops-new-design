import React from 'react';
import CardPrice from '@/components/ui/SectionPrice/CardPrice';
import SectionCardsLayout from '@/components/ui/SectionCardsLayout/SectionCardsLayout';
import YopsVpn from '@/components/ui/YopsVpn';

const SectionPersonalPrice = () => (
  <div id="#price">
    <SectionCardsLayout
      title={
        <>
          Купить доступ к персональным серверам <YopsVpn />{' '}
        </>
      }
      description="Доступ до 20 устройств"
    >
      <CardPrice
        title="Россия"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        price={500}
      />
      <CardPrice
        title="Казахстан"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        price={700}
      />
      <CardPrice
        title="Нидерланды"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        price={1000}
      />
    </SectionCardsLayout>
  </div>
);

export default SectionPersonalPrice;

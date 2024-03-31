import React, { FC } from 'react';
import SectionCardsLayout from '@/components/ui/SectionCardsLayout/SectionCardsLayout';
import CardPrice from '@/components/ui/SectionPrice/CardPrice';
import { Service } from '@/components/types';

const SectionPrice: FC<{ services: Service[] }> = ({ services }) => (
  <SectionCardsLayout title={<>Купить доступ для 1 устройства на месяц</>}>
    {services.map((el) => (
      <CardPrice
        title={el.title}
        price={el.solar}
        key={`price card ${el.id}`}
      />
    ))}
  </SectionCardsLayout>
);

export default SectionPrice;

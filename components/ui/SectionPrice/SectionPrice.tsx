'use client';

import { Loader } from '@mantine/core';
import SectionCardsLayout from '@/components/ui/SectionCardsLayout/SectionCardsLayout';
import CardPrice from '@/components/ui/SectionPrice/CardPrice';
import { useGetServicesQuery } from '@/context/api/ServiceApi';

const SectionPrice = () => {
  const { data, isLoading } = useGetServicesQuery(null);
  return <SectionCardsLayout title={<>Купить доступ для 1 устройства на месяц</>}>
    {isLoading ? <Loader /> : data.map((el) => (
      <CardPrice
        title={el.title}
        price={el.solar}
        key={`price card ${el.id}`}
      />
    ))}
         </SectionCardsLayout>;
};

export default SectionPrice;

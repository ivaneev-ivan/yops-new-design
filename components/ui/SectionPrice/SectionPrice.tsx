'use client'

import SectionCardsLayout from '@/components/ui/SectionCardsLayout/SectionCardsLayout'
import CardPrice from '@/components/ui/SectionPrice/CardPrice'
import { useGetServicesQuery } from '@/context/api/ServiceApi'
import { Loader } from '@mantine/core'

const SectionPrice = () => {
  const { data, isLoading } = useGetServicesQuery(null)
  return (
    <SectionCardsLayout title={<>Купить доступ для 1 устройства на месяц</>}>
      {isLoading || data === undefined ? (
        <Loader />
      ) : (
        data.map(el => (
          <CardPrice title={el.title} price={100} key={`price card ${el.id}`} />
        ))
      )}
    </SectionCardsLayout>
  )
}

export default SectionPrice

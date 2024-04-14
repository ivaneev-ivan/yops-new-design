'use client'

import { Navbar } from '@/components/ui/Navbar/Navbar'
import { useGetOrdersQuery } from '@/context/api/OrderApi'
import useAccessToken from '@/hooks/useAccessToken'
import { Loader, SimpleGrid } from '@mantine/core'
import { redirect } from 'next/navigation'
import OrderCard from './OrderCard'

const ProfileScreen = () => {
  const accessToken = useAccessToken()
  if (accessToken === null) {
    redirect('/login')
  }
  const { data, isLoading } = useGetOrdersQuery(accessToken, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
    pollingInterval: 3000,
  })
  return (
    <Navbar current='/profile/bought/'>
      {isLoading ? (
        <Loader />
      ) : (
        <SimpleGrid
          cols={{ base: 1, lg: 3 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          {data.map(el => (
            <OrderCard {...el} key={el.id} />
          ))}
        </SimpleGrid>
      )}
    </Navbar>
  )
}

export default ProfileScreen

'use client'
import { useGetOrderDetailQuery } from '@/context/api/OrderApi'
import useAccessToken from '@/hooks/useAccessToken'
import { Center, Loader } from '@mantine/core'
import { redirect } from 'next/navigation'
import { FC } from 'react'

const OrderDetail: FC<{ id: number }> = ({ id }) => {
  const token = useAccessToken()
  if (token === null) {
    redirect('/login')
  }
  const { isLoading, data } = useGetOrderDetailQuery({ token, id })

  return (
    <div>
      {isLoading ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <>efwe</>
      )}
    </div>
  )
}

export default OrderDetail

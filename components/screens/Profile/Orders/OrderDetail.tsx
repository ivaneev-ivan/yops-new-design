'use client'

import ButtonCopy from '@/components/ui/ClipBoardCopy'
import { useGetConfigQuery } from '@/context/api/ConfigApi'
import { useGetOrderDetailQuery } from '@/context/api/OrderApi'
import { IConfig, statusCard } from '@/context/api/types'
import useAccessToken from '@/hooks/useAccessToken'
import { Center, Loader, SimpleGrid, Table, Text, rem } from '@mantine/core'
import { redirect } from 'next/navigation'
import { FC } from 'react'
import TutorialVpn from '../Tutorial/TutorialVpn'

const ConfigTable: FC<{ configs: IConfig[] }> = ({ configs }) => (
  <Table.ScrollContainer style={{ marginTop: rem(20) }} minWidth={200}>
    <Table verticalSpacing='xs'>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>#</Table.Th>
          <Table.Th>Ключ доступа</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {configs.map((config, el) => (
          <Table.Tr key={`Token ${config.id}`}>
            <Table.Td>{el + 1}</Table.Td>
            <Table.Td>
              {`${config.accessUrl.slice(0, 30)}...`}{' '}
              <ButtonCopy data={config.accessUrl} />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  </Table.ScrollContainer>
)

const OrderDetail: FC<{ id: number }> = ({ id }) => {
  const token = useAccessToken()
  if (token === null) {
    redirect('/login')
  }
  const { isLoading, data } = useGetOrderDetailQuery(
    { token, id },
    { pollingInterval: 5000 },
  )
  const { isLoading: isLoadingConfig, data: configData } = useGetConfigQuery(
    {
      accessToken: token,
      orderId: id,
    },
    { pollingInterval: 10000 },
  )

  return (
    <div>
      {isLoading || token === null || isLoadingConfig === null ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <>
          <h1>Заказ {data.uuid_id}</h1>
          <Text size='xl'>Дата создания: {data.create_at.split('T')[0]}</Text>
          <Text size='xl'>Стоимость: {data.solar}</Text>
          <Text size='xl'>
            Статус заказа:{' '}
            {statusCard[data.status] ? statusCard[data.status] : 'Выполнен'}
          </Text>
          {configData != null && configData.length > 0 ? (
            <>
              <TutorialVpn />
              <ConfigTable configs={configData} />
            </>
          ) : (
            <SimpleGrid cols={2} mt={20}>
              <Text size='xl'>
                Заказ сейчас выполняется, пожалуйста подождите ...
              </Text>
              <Loader />
            </SimpleGrid>
          )}
        </>
      )}
    </div>
  )
}

export default OrderDetail

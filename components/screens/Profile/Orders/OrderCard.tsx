import { IOrder, statusCard } from '@/context/api/types'
import { Button, Card, Group, Text } from '@mantine/core'
import Link from 'next/link'
import { FC } from 'react'

const OrderCard: FC<IOrder> = props => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Group justify='space-between' mt='md' mb='xs'>
        <Text fw={500}>Заказ #{props.id}</Text>
      </Group>
      <Text size='md'>Дата создания: {props.create_at.split('T')[0]}</Text>
      <Text size='md'>Стоимость: {props.solar}</Text>
      <Text size='md'>Статус заказа: {statusCard[props.status]}</Text>
      {props.is_payed ? (
        <Link href={`/profile/bought/${props.id}/`}>
          <Button color='blue' fullWidth mt='md' radius='md'>
            Посмотреть подробнее
          </Button>
        </Link>
      ) : (
        <Link href={props.payment_url}>
          <Button color='blue' fullWidth mt='md' radius='md'>
            Оплатить
          </Button>
        </Link>
      )}
    </Card>
  )
}
export default OrderCard

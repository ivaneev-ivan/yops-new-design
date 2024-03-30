'use client';

import { Button, Card, Group, Text } from '@mantine/core';
import { FC } from 'react';
import classes from './CardPrice.module.scss';
import { useAppSelector } from '@/context/store';
import Link from 'next/link';

interface ICardPrice {
  title: string;
  price: number;
  description?: string;
}

const CardPrice: FC<ICardPrice> = ({ price, title, description }) => {
  const user = useAppSelector((state) => state.userState.user);
  const url = user === null ? '/login' : '/profile/new/';
  const text = user === null ? 'Войти' : 'Купить';
  return (
    <Card shadow="md" radius="md" className={classes.card} padding="xl">
      <Text fz="xl" fw={700} className={classes.cardTitle} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
      <Group mt={20} justify="space-between">
        <Text fz="xl" fw={700}>
          {price} ₽
        </Text>
        <Link href={url}>
          <Button px={30}>{text}</Button>
        </Link>
      </Group>
    </Card>
  );
};

export default CardPrice;

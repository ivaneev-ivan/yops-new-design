'use client';

import { Button, Card, Group, rem, Text } from '@mantine/core';
import { FC } from 'react';
import classes from './CardPrice.module.scss';

interface ICardPrice {
  title: string;
  price: number;
  description?: string;
}

const CardPrice: FC<ICardPrice> = ({ price, title, description }) => (
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
      <Button px={30}>Купить</Button>
    </Group>
  </Card>
);

export default CardPrice;

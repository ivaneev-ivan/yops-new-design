'use client';

import { Card, rem, Text, useMantineTheme } from '@mantine/core';
import { IconGauge, IconSettings, IconUser } from '@tabler/icons-react';
import classes from '@/components/ui/Features/Features.module.scss';

import YopsVpn from '@/components/ui/YopsVpn';
import SectionCardsLayout from '@/components/ui/SectionCardsLayout/SectionCardsLayout';

const mockdata = [
  {
    title: 'Удобство использования',
    description:
      'Настройка и управление VPN-сервером стали еще проще благодаря нашему сайту. Теперь вы сможете без труда создать свой сервер и настроить его под свои нужды.',
    icon: IconGauge,
  },
  {
    title: 'Безопасность',
    description:
      'Мы гарантируем, что ваши данные будут защищены от хакеров и других злоумышленников. Мы используем самые современные методы шифрования для обеспечения безопасности вашего соединения.',
    icon: IconUser,
  },
  {
    title: 'Разнообразие опций',
    description:
      'У нас вы найдете большой выбор серверов и конфигураций на любой вкус. Наши специалисты постоянно работают над улучшением нашего сервиса, чтобы предложить вам лучшие возможности.',
    icon: IconSettings,
  },
];

const FeaturesCards = () => {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <SectionCardsLayout
      title={
        <>
          Преимущества <YopsVpn />
        </>
      }
    >
      {features}
    </SectionCardsLayout>
  );
};
export default FeaturesCards;

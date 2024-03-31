'use client';

import React, { useEffect, useState } from 'react';
import { Button, Center, Container, Group, Select, SimpleGrid, Switch, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { Navbar } from '@/components/ui/Navbar/Navbar';
import SliderInput from '@/components/ui/Slider/Slider';
import { QuestionIcon } from '@storybook/icons';
import classes from '@/components/screens/Profile/New/NewOrder.module.scss';

import { useCreateOrderMutation } from '@/context/api/OrderApi';

const locations = ['Россия', 'Казахстан'];

const NewOrder = () => {
  const form = useForm({
    initialValues: {
      countConfigs: 10,
      createOwnServer: true,
      location: locations[0],
    },
  });
  const [createOrder, { isLoading, isError, error, isSuccess }] = useCreateOrderMutation();
  const [price, setPrice] = useState(100);
  const { hovered, ref } = useHover();
  useEffect(() => {
    if (form.values.createOwnServer) {
      let basePrice = 0;
      if (form.values.location === locations[0]) {
        basePrice = 200;
      } else {
        basePrice = 300;
      }
      basePrice += form.values.countConfigs * 25;
      setPrice(basePrice);
    } else {
      setPrice(form.values.countConfigs * 100);
    }
  }, [form.values]);

  return (
    <Navbar current="/profile/new/">
      <Container>
        <Center>
          <form
            style={{ width: '100%', height: '100%' }}
            onSubmit={form.onSubmit((values) =>
              createOrder({
                location: values.location === locations[0] ? 1 : 2,
                count_configs: values.countConfigs,
                is_own_server: values.createOwnServer,
              })
            )}
          >
            <SimpleGrid cols={1}>
              <SliderInput
                placeholder="Количество устройств"
                label="Выберите количество устройст, для которых вы хотитет приобрести VPN"
                {...form.getInputProps('countConfigs')}
                max={20}
                min={1}
                step={1}
              />
              <Group style={{ width: '100%' }}>
                <Switch
                  mt="md"
                  label="Создавать собственный VPN сервер"
                  {...form.getInputProps('createOwnServer', { type: 'checkbox' })}
                />
                <div className={classes.iconSection} ref={ref}>
                  <QuestionIcon size={18} />
                </div>
              </Group>
              {hovered && (
                <div>
                  Будет создан отдельный VPN-сервер, на котором будут настроены конфигурации для
                  вашего количества устройств.
                </div>
              )}
              <Select
                label="Местоположение сервера"
                placeholder="Выберите месторасположение сервера"
                {...form.getInputProps('location')}
                data={locations}
              />
              <Group>
                <Text>Цена: {price} ₽</Text>
              </Group>
              <Button type="submit">Создать</Button>
            </SimpleGrid>
          </form>
        </Center>
      </Container>
    </Navbar>
  );
};

export default NewOrder;

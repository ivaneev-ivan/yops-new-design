/* eslint-disable no-plusplus */
'use client'

import classes from '@/components/screens/Profile/New/NewOrder.module.scss'
import { Navbar } from '@/components/ui/Navbar/Navbar'
import SliderInput from '@/components/ui/Slider/Slider'
import {
  Button,
  Center,
  Container,
  Group,
  Loader,
  Select,
  SimpleGrid,
  Switch,
  Text,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useHover } from '@mantine/hooks'
import { IconBasketQuestion } from '@tabler/icons-react'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useCreateOrderMutation } from '@/context/api/OrderApi'
import { useGetServicesQuery } from '@/context/api/ServiceApi'

import useAccessToken from '@/hooks/useAccessToken'

const NewOrder = () => {
  const form = useForm({
    initialValues: {
      countConfigs: 10,
      createOwnServer: true,
      location: 'Россия',
      createFileServer: false,
    },
  })
  const token = useAccessToken()
  const [createOrder, { isLoading, isSuccess, data }] = useCreateOrderMutation()
  const { data: locations, isLoading: isLoadingLocations } =
    useGetServicesQuery(null, {
      refetchOnFocus: true,
      refetchOnReconnect: true,
      pollingInterval: 10000,
    })
  const [price, setPrice] = useState(100)
  const locationsList =
    locations !== undefined ? locations.map(el => el.title) : []
  const { hovered, ref } = useHover()

  const getLocation = (title: string) => {
    if (locations === undefined) {
      return null
    }
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].title === title) {
        return locations[i]
      }
    }
    return null
    // return locations[0]
  }

  if (isSuccess) {
    redirect(`${data.payment_url}`)
  }

  useEffect(() => {
    if (form.values.createOwnServer && !isLoadingLocations) {
      const locationPrice = getLocation(form.values.location)
      let basePrice = 0
      if (locationPrice === undefined) {
        basePrice = 300
      } else {
        basePrice = locationPrice.solar
      }
      basePrice += form.values.countConfigs * 25
      setPrice(basePrice)
    } else {
      setPrice(form.values.countConfigs * 100)
    }
  }, [form.values])

  return (
    <Navbar current='/profile/new/'>
      <Container>
        <Center>
          <form
            style={{ width: '100%', height: '100%' }}
            onSubmit={form.onSubmit(values =>
              createOrder({
                location: getLocation(values.location).id,
                count_configs: values.countConfigs,
                is_own_server: values.createOwnServer,
                accessToken: token,
                services: values.createFileServer ? ['vpn', 'files'] : ['vpn'],
              }),
            )}
          >
            <SimpleGrid cols={1}>
              {isLoading && (
                <Center my={10}>
                  <Loader />
                </Center>
              )}
              <SliderInput
                placeholder='Количество устройств'
                label='Выберите количество устройств, для которых вы хотите приобрести VPN'
                {...form.getInputProps('countConfigs')}
                max={20}
                min={1}
                step={1}
              />
              <Group style={{ width: '100%' }}>
                <Switch
                  mt='md'
                  disabled
                  label='Создавать собственный VPN сервер'
                  {...form.getInputProps('createOwnServer', {
                    type: 'checkbox',
                  })}
                />
                <div className={classes.iconSection} ref={ref}>
                  <IconBasketQuestion size={18} />
                </div>
              </Group>
              <Group style={{ width: '100%' }}>
                <Switch
                  mt='md'
                  label='Создавать файловое хранилище на сервере'
                  {...form.getInputProps('createFileServer', {
                    type: 'checkbox',
                  })}
                />
              </Group>
              {hovered && (
                <div>
                  Будет создан отдельный VPN-сервер, на котором будут настроены
                  конфигурации для вашего количества устройств.
                </div>
              )}
              <Select
                label='Местоположение сервера'
                placeholder='Выберите месторасположение сервера'
                {...form.getInputProps('location')}
                data={locationsList}
              />
              <Group>
                <Text>Цена: {price} ₽</Text>
              </Group>
              <Button type='submit'>Создать</Button>
            </SimpleGrid>
          </form>
        </Center>
      </Container>
    </Navbar>
  )
}

export default NewOrder

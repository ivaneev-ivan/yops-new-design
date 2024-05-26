'use client'

import ErrorAlert from '@/components/screens/Auth/ErrorAlert'
import classes from '@/components/screens/Auth/Login.module.scss'
import { useLoginUserMutation } from '@/context/api/AuthApi'
import {
  Button,
  Center,
  Loader,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'

const LoginScreen = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Неправильный email'),
      password: value =>
        value.length === 0
          ? 'Заполните поле'
          : value.length > 6
            ? 'Пароль слишком короткий'
            : null,
    },
  })
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loginUser, { isError, error, isLoading, isSuccess }] =
    useLoginUserMutation()
  const onSubmit = (data: { email: string; password: string }) => {
    loginUser(data)
  }

  if (isSuccess) {
    redirect('/profile/bought/')
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30} mb={20}>
        <Title order={2} className={classes.title} ta='center' mt='md' mb={50}>
          Рады снова Вас видеть!
        </Title>
        {isLoading ? (
          <Center>
            <Loader />
          </Center>
        ) : (
          <form onSubmit={form.onSubmit(onSubmit)}>
            {isError && (
              <>
                {
                  // @ts-ignore
                  Object.keys(error.data).map(key => {
                    // @ts-ignore
                    const data = error.data[key]
                    return <ErrorAlert title={key} errors={data} />
                  })
                }
              </>
            )}
            <TextInput
              label='Email адрес'
              withAsterisk
              {...form.getInputProps('email')}
              placeholder='fastvpn@mail.ru'
              size='md'
            />
            <PasswordInput
              withAsterisk
              {...form.getInputProps('password')}
              label='Пароль'
              placeholder='Ваш пароль'
              mt='md'
              size='md'
            />
            <Button type='submit' fullWidth mt='xl' size='md'>
              Войти
            </Button>
            <Text ta='center' mt='md'>
              Нет аккаунта?{' '}
              <Link className={classes.link} href='/register/'>
                Зарегистрироваться
              </Link>
            </Text>
            <Text ta='center' mt='md'>
              Забыли пароль?{' '}
              <Link className={classes.link} href='/password_reset/'>
                Сбросить пароль
              </Link>
            </Text>
          </form>
        )}
      </Paper>
    </div>
  )
}
export default LoginScreen

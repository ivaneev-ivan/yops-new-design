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
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'

const LoginScreen = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loginUser, { isError, error, isLoading, isSuccess }] =
    useLoginUserMutation()
  const submit = () => {
    loginUser(formData)
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
          <>
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
              value={formData.email}
              onInput={e =>
                setFormData({ ...formData, email: e.currentTarget.value })
              }
              placeholder='fastvpn@mail.ru'
              size='md'
            />
            <PasswordInput
              value={formData.password}
              onInput={e =>
                setFormData({ ...formData, password: e.currentTarget.value })
              }
              label='Пароль'
              placeholder='Ваш пароль'
              mt='md'
              size='md'
            />
            <Button onClick={submit} fullWidth mt='xl' size='md'>
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
          </>
        )}
      </Paper>
    </div>
  )
}
export default LoginScreen

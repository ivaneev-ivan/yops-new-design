'use client';

import {
  Button,
  Center,
  Checkbox,
  Loader,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import classes from './Login.module.scss';
import { useLoginUserMutation } from '@/context/api/AuthApi';
import ErrorAlert from '@/components/screens/Auth/ErrorAlert';

const LoginScreen = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loginUser, { isError, error, isLoading }] = useLoginUserMutation();
  const submit = () => {
    loginUser(formData);
  };
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30} mb={20}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
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
                  Object.keys(error.data).map((key) => {
                    // @ts-ignore
                    const data = error.data[key];
                    return <ErrorAlert title={key} errors={data} />;
                  })
                }
              </>
            )}
            <TextInput
              label="Email адрес"
              value={formData.email}
              onInput={(e) => setFormData({ ...formData, email: e.currentTarget.value })}
              placeholder="fastvpn@mail.ru"
              size="md"
            />
            <PasswordInput
              value={formData.password}
              onInput={(e) => setFormData({ ...formData, password: e.currentTarget.value })}
              label="Пароль"
              placeholder="Ваш пароль"
              mt="md"
              size="md"
            />
            <Checkbox label="Остаться авторизованным" mt="xl" size="md" />
            <Button onClick={submit} fullWidth mt="xl" size="md">
              Войти
            </Button>
            <Text ta="center" mt="md">
              Нет аккаунта?{' '}
              <Link className={classes.link} href="/auth/register/">
                Зарегистрироваться
              </Link>
            </Text>
          </>
        )}
      </Paper>
    </div>
  );
};
export default LoginScreen;

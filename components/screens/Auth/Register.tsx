'use client';

import {
  Button,
  Center,
  Loader,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import classes from './Login.module.scss';
import ErrorAlert from '@/components/screens/Auth/ErrorAlert';
import { useRegisterUserMutation } from '@/context/api/AuthApi';

const RegisterScreen = () => {
  const [data, setData] = useState({ email: '', password: '', password1: '' });
  const [IsPasswordNotCorrect, setIsPasswordNotCorrect] = useState(false);
  const [registerUser, { isLoading, isError, error }] = useRegisterUserMutation();
  const onInputChange = (e: FormEvent<HTMLInputElement>, key: string) => {
    setData({ ...data, [key]: e.currentTarget.value });
  };

  const onSubmit = () => {
    if (data.password !== data.password1) {
      setIsPasswordNotCorrect(true);
      return;
    }
    setIsPasswordNotCorrect(false);
    registerUser({ email: data.email, password: data.password });
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Добро пожаловать!
        </Title>
        {isLoading ? (
          <Center>
            <Loader />
          </Center>
        ) : (
          <>
            {IsPasswordNotCorrect && (
              <ErrorAlert title="non_field_errors" errors={['Пароли не совпадают']} />
            )}
            <TextInput
              value={data.email}
              onInput={(e) => onInputChange(e, 'email')}
              label="Email адрес"
              placeholder="fastvpn@mail.ru"
              size="md"
            />
            <PasswordInput
              value={data.password}
              onInput={(e) => onInputChange(e, 'password')}
              label="Пароль"
              placeholder="Ваш пароль"
              mt="md"
              error={IsPasswordNotCorrect}
              size="md"
            />
            <PasswordInput
              value={data.password1}
              onInput={(e) => onInputChange(e, 'password1')}
              label="Пароль"
              error={IsPasswordNotCorrect}
              placeholder="Повторите ваш пароль"
              mt="md"
              size="md"
            />
            <Button onClick={onSubmit} fullWidth mt="xl" size="md">
              Зарегистрироваться
            </Button>
            <Text ta="center" mt="md">
              Есть аккаунт?{' '}
              <Link className={classes.link} href="/auth/login/">
                Войти
              </Link>
            </Text>
          </>
        )}
      </Paper>
    </div>
  );
};
export default RegisterScreen;

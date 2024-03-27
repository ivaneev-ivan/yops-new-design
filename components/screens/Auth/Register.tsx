'use client';

import ErrorAlert from '@/components/screens/Auth/ErrorAlert';
import { useRegisterUserMutation } from '@/context/api/AuthApi';
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
import { redirect } from 'next/navigation';
import { FormEvent, useState } from 'react';
import classes from './Login.module.scss';

const initState = { email: '', password: '', password1: '' };

const RegisterScreen = () => {
  const [data, setData] = useState(initState);
  const [IsPasswordNotCorrect, setIsPasswordNotCorrect] = useState(false);
  const [registerUser, { isLoading, isError, error, isSuccess }] = useRegisterUserMutation();
  const onInputChange = (e: FormEvent<HTMLInputElement>, key: string) => {
    setData({ ...data, [key]: e.currentTarget.value });
  };
  if (isSuccess) {
    redirect('/profile/new/');
  }
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
            {isError && (
              <>
                {
                  // @ts-ignore
                  Object.keys(error.data).map((key) => {
                    // @ts-ignore
                    // eslint-disable-next-line @typescript-eslint/no-shadow
                    const data = error.data[key];
                    return <ErrorAlert key={key} title={key} errors={data} />;
                  })
                }
              </>
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
              <Link className={classes.link} href="/login/">
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

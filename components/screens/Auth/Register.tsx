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
import { useState } from 'react';
import classes from './Login.module.scss';
import { useForm } from '@mantine/form';

const initState = { email: '', password: '', password1: '' };

const RegisterScreen = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      password1: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Неправильный email'),
      password: (value) => (value.length < 6 ? 'Пароль слишком короткий' : null),
      password1: (value) => (value.length < 6 ? 'Пароль слишком короткий' : null),
    },
  });
  const [data, setData] = useState(initState);
  const [IsPasswordNotCorrect, setIsPasswordNotCorrect] = useState(false);
  const [registerUser, { isLoading, isError, error, isSuccess }] = useRegisterUserMutation();

  if (isSuccess) {
    redirect('/profile/new/');
  }
  const onSubmit = (data: { email: string; password: string; password1: string }) => {
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
          <form onSubmit={form.onSubmit(onSubmit)}>
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
              withAsterisk
              {...form.getInputProps('email')}
              // value={data.email}
              // onInput={(e) => onInputChange(e, 'email')}
              label="Email адрес"
              placeholder="fastvpn@mail.ru"
              size="md"
            />
            <PasswordInput
              // value={data.password}
              // onInput={(e) => onInputChange(e, 'password')}
              {...form.getInputProps('password')}
              label="Пароль"
              placeholder="Ваш пароль"
              mt="md"
              // error={IsPasswordNotCorrect}
              size="md"
            />
            <PasswordInput
              // value={data.password1}
              // onInput={(e) => onInputChange(e, 'password1')}
              label="Пароль"
              {...form.getInputProps('password1')}
              error={IsPasswordNotCorrect}
              placeholder="Повторите ваш пароль"
              mt="md"
              size="md"
            />
            <Button type="submit" fullWidth mt="xl" size="md">
              Зарегистрироваться
            </Button>
            <Text ta="center" mt="md">
              Есть аккаунт?{' '}
              <Link className={classes.link} href="/login/">
                Войти
              </Link>
            </Text>
          </form>
        )}
      </Paper>
    </div>
  );
};
export default RegisterScreen;

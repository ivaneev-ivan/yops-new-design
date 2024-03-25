'use client';

import { Button, Checkbox, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import Link from 'next/link';
import classes from './Login.module.scss';

const RgisterScreen = () => (
  <div className={classes.wrapper}>
    <Paper className={classes.form} radius={0} p={30}>
      <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
        Добро пожаловать!
      </Title>

      <TextInput label="Email адрес" placeholder="fastvpn@mail.ru" size="md" />
      <PasswordInput label="Пароль" placeholder="Ваш пароль" mt="md" size="md" />
      <PasswordInput label="Пароль" placeholder="Повторите ваш пароль" mt="md" size="md" />
      <Button fullWidth mt="xl" size="md">
        Зарегистрироваться
      </Button>
      <Text ta="center" mt="md">
        Есть аккаунт?{' '}
        <Link className={classes.link} href="/auth/login/">
          Войти
        </Link>
      </Text>
    </Paper>
  </div>
);
export default RgisterScreen;

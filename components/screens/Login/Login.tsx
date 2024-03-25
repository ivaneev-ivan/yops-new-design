'use client';

import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './Login.module.scss';
import Link from 'next/link';

const LoginScreen = () => (
  <div className={classes.wrapper}>
    <Paper className={classes.form} radius={0} p={30}>
      <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
        Рады снова вас видеть!
      </Title>

      <TextInput label="Email адрес" placeholder="fastvpn@mail.ru" size="md" />
      <PasswordInput label="Пароль" placeholder="Ваш пароль" mt="md" size="md" />
      <Checkbox label="Оставить авторизованным" mt="xl" size="md" />
      <Button fullWidth mt="xl" size="md">
        Войти
      </Button>
      <Text ta="center" mt="md">
        Нет аккаунта?{' '}
        <Link className={classes.link} href="/auth/register/">
          Зарегистрироваться
        </Link>
      </Text>
    </Paper>
  </div>
);
export default LoginScreen;

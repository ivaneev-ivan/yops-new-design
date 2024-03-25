'use client';

import { Box, Button, Group, Text } from '@mantine/core';
import Link from 'next/link';
import classes from './Header.module.scss';
import Logo from '@/components/ui/Logo';
import { useAppDispatch, useAppSelector } from '@/context/store';
import { logout } from '@/context/features/UserSlice';

const Header = () => {
  const user = useAppSelector((state) => state.userState.user);
  const dispatch = useAppDispatch();
  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={0}>
            <Link href="/" className={classes.link}>
              <Logo />
            </Link>
          </Group>
          <Group>
            {user === null ? (
              <>
                <Link href="/auth/login/">
                  <Button size="sm" variant="default">
                    Вход
                  </Button>
                </Link>
                <Link href="/auth/register/">
                  <Button size="sm">Регистрация</Button>
                </Link>
              </>
            ) : (
              <>
                <Text>{user.email}</Text>
                <Button onClick={() => dispatch(logout())} size="sm">
                  Выйти
                </Button>
              </>
            )}
          </Group>
        </Group>
      </header>
    </Box>
  );
};

export default Header;

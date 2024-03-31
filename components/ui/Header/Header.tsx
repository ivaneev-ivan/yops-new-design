'use client';

import Logo from '@/components/ui/Logo';
import { logout } from '@/context/features/UserSlice';
import { useAppDispatch, useAppSelector } from '@/context/store';
import { Box, Button, Group } from '@mantine/core';
import Link from 'next/link';
import classes from '@/components/ui/Header/Header.module.scss';


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
                <Link href="/login/">
                  <Button size="compact-sm" variant="default">
                    Вход
                  </Button>
                </Link>
                <Link href="/register/">
                  <Button size="compact-sm">Регистрация</Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/profile/bought">
                  <Button size="compact-sm">Личный кабинет</Button>
                </Link>
                <Button onClick={() => dispatch(logout())} size="compact-sm">
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

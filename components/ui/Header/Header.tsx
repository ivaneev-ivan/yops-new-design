import { Box, Button, Group } from '@mantine/core';
import Link from 'next/link';
import classes from './Header.module.scss';
import Logo from '@/components/ui/Logo';

const Header = () => (
  <Box>
    <header className={classes.header}>
      <Group justify="space-between" h="100%">
        <Group h="100%" gap={0}>
          <Link href="/" className={classes.link}>
            <Logo />
          </Link>
          {/*<ColorSchemeToggle />*/}
        </Group>
        <Group>
          <Link href="/auth/login/">
            <Button size="sm" variant="default">
              Вход
            </Button>
          </Link>
          <Link href="/auth/register/">
            <Button size="sm">Регистрация</Button>
          </Link>
        </Group>
      </Group>
    </header>
  </Box>
);

export default Header;

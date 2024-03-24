import { Box, Button, Group } from '@mantine/core';
import Link from 'next/link';
import classes from './Header.module.scss';
import Logo from '@/components/ui/Logo';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

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
          <Button size="sm" variant="default">
            Вход
          </Button>
          <Button size="sm">Регистрация</Button>
        </Group>
      </Group>
    </header>
  </Box>
);

export default Header;

'use client';

import { Button, Group, rem, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoon, IconSunrise } from '@tabler/icons-react';

const styleButton = { width: rem(25), height: rem(25) };

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Group>
      <Button
        variant="outline"
        radius="xl"
        size="xs"
        onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
      >
        {colorScheme === 'light' ? (
          <IconMoon style={styleButton} stroke={1} color={theme.colors.blue[6]} />
        ) : (
          <IconSunrise style={styleButton} stroke={1} color={theme.colors.blue[6]} />
        )}
      </Button>
    </Group>
  );
}

'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  return (
    <Group>
      {colorScheme === 'dark' ? (
        <Button variant="outline" onClick={() => setColorScheme('light')}>
          Светлая тема
        </Button>
      ) : (
        <Button variant="outline" onClick={() => setColorScheme('dark')}>
          Темная тема
        </Button>
      )}
    </Group>
  );
}

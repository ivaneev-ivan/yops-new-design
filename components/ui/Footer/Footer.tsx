'use client';

import { ActionIcon, Anchor, Group, rem } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './Footer.module.scss';
import Logo from '@/components/ui/Logo';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Store' },
  { link: '#', label: 'Careers' },
];

const Footer = () => {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Link href="/" className={classes.link}>
          <Logo />
        </Link>
        <Group className={classes.links}>{items}</Group>
        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
};
export default Footer;

'use client'

import classes from '@/components/ui/Footer/Footer.module.scss'
import { Anchor, Group } from '@mantine/core'
import Link from 'next/link'

import Logo from '@/components/ui/Logo'

const links = [
  { link: '#', label: 'Конакты' },
  { link: '#', label: 'Политики конфидециальности' },
]

const Footer = () => {
  const items = links.map(link => (
    <Anchor
      c='dimmed'
      key={link.label}
      href={link.link}
      lh={1}
      onClick={event => event.preventDefault()}
      size='sm'
    >
      {link.label}
    </Anchor>
  ))

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Link href='/' className={classes.link}>
          <Logo />
        </Link>
        <Group className={classes.links}>{items}</Group>
      </div>
    </div>
  )
}
export default Footer

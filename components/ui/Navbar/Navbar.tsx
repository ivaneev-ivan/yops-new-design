'use client'

import classes from '@/components/ui/Navbar/Navbar.module.scss'
import { Group, Paper } from '@mantine/core'
import { IconBox, IconShoppingCart } from '@tabler/icons-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface INavbarLink {
  link: string
  label: string
  icon: any
}

const data: INavbarLink[] = [
  { link: '/profile/bought/', label: 'Приобретенные VPN', icon: IconBox },
  {
    link: '/profile/new/',
    label: 'Приобрести VPN',
    icon: IconShoppingCart,
  },
]

export function Navbar({
  children,
  current,
}: {
  children: ReactNode
  current: string
}) {
  const links = data.map(item => {
    const active = current === item.link ? classes.activeLink : classes.link
    return (
      <Link className={active} href={item.link} key={item.label}>
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </Link>
    )
  })

  return (
    <Group className={classes.box}>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>{links}</div>
      </nav>
      <Paper p={10} className={classes.content}>
        {children}
      </Paper>
    </Group>
  )
}

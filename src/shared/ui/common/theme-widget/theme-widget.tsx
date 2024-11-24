'use client'

import Link from 'next/link'

import clsx from 'clsx'
import { InputSwitch } from 'primereact/inputswitch'

import classes from './theme-widget.module.scss'
import { Theme, useTheme } from '@/shared/context/theme.context'

export const ThemeWidget = ({ className }: { className?: string }) => {
  const themeCtx = useTheme()

  const isDark = themeCtx?.theme === Theme['DARK']

  return (
    <div className={clsx(classes['theme-widget'], className)}>
      <div className={clsx(classes['toggle-wrapper'], isDark && classes.dark)}>
        <i className={clsx('pi pi-sun', classes.icon, !isDark && classes.sun)} />

        <InputSwitch
          checked={isDark}
          name="theme-switch"
          onChange={(e) => themeCtx?.setTheme(e.value ? Theme['DARK'] : Theme['LIGHT'])}
        />

        <i className={clsx('pi pi-moon', classes.icon, isDark && classes.moon)} />
      </div>

      <Link href="https://github.com/reactoholic/the-ocd-dev-guidelines" target="_blank">
        <i className={clsx('pi pi-github', classes.icon)} />
      </Link>
    </div>
  )
}

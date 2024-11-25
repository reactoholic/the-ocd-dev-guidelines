'use client'

import Link from 'next/link'

import clsx from 'clsx'
import { InputSwitch, type InputSwitchChangeEvent } from 'primereact/inputswitch'

import { Theme, useTheme } from '@/shared/context/theme.context'

import classes from './theme-widget.module.scss'

export const ThemeWidget = () => {
  const themeCtx = useTheme()

  const isDark = themeCtx?.theme === Theme['DARK']

  const onThemeSwitchToggle = (e: InputSwitchChangeEvent) =>
    themeCtx?.setTheme(e.value ? Theme['DARK'] : Theme['LIGHT'])

  return (
    <div className={classes['theme-widget']}>
      <div className={classes['toggle-wrapper']}>
        <i className={clsx('pi pi-sun', classes.icon, !isDark && classes.sun)} />

        <InputSwitch checked={isDark} name="theme-switch" onChange={onThemeSwitchToggle} />

        <i className={clsx('pi pi-moon', classes.icon, isDark && classes.moon)} />
      </div>

      <Link href="https://github.com/reactoholic/the-ocd-dev-guidelines" target="_blank">
        <i className={clsx('pi pi-github', classes.icon)} />
      </Link>
    </div>
  )
}

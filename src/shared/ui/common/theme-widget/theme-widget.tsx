'use client'

import clsx from 'clsx'
import { InputSwitch } from 'primereact/inputswitch'
import { useLocalStorage } from '@uidotdev/usehooks'

import { constants } from '@/shared/constants'

import classes from './theme-widget.module.scss'

export const ThemeWidget = ({ className }: ThemeWidgetProps) => {
  const [theme, setTheme] = useLocalStorage<Theme>(constants.localStorageKeys.theme, Theme['LIGHT'])

  return (
    <div className={className}>
      <InputSwitch
        checked={theme === Theme['DARK']}
        onChange={(e) => setTheme(e.value ? Theme['DARK'] : Theme['LIGHT'])}
      />

      <i className={clsx('pi pi-github', classes.icon)} />
    </div>
  )
}

type ThemeWidgetProps = {
  className?: string
}

const enum Theme {
  DARK = 'DARK',
  LIGHT = 'LIGHT'
}

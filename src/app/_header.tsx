'use client'

import { ThemeWidget } from '@/shared/ui/common/theme-widget'

import classes from './_app-styles.module.scss'

export const Header = () => {
  return (
    <div className={classes.header}>
      <ThemeWidget />
    </div>
  )
}

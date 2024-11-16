import React from 'react'

import Link from 'next/link'

import { Typography } from '@/ui/common/typography'
import { ThemeWidget } from '@/ui/common/theme-widget'

import classes from './_app-styles.module.scss'

export default function App() {
  return (
    <div className={classes.app}>
      <ThemeWidget className="p-2 shadow-1 absolute top-0 right-0" />

      <Typography component="h1" className={classes.title}>
        Welcome to the OCD dev guidelines!
      </Typography>

      <Link href="/home" className={classes.subtitle}>
        <Typography component="code">You&apos;re not alone.</Typography>
      </Link>
    </div>
  )
}

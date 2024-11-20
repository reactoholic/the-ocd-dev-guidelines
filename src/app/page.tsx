import React from 'react'

import Link from 'next/link'

import { Typography } from '@/shared/ui/common/typography'
import { ThemeWidget } from '@/shared/ui/common/theme-widget'

import classes from './_app-styles.module.scss'

const App = () => (
  <div className={classes.app}>
    <ThemeWidget className={classes.themePanel} />

    <Typography component="h1" className={classes.title}>
      Welcome to the OCD dev guidelines!
    </Typography>

    <Link href="/home" className={classes.subtitle}>
      <Typography component="code">You&apos;re not alone.</Typography>
    </Link>
  </div>
)

export default App

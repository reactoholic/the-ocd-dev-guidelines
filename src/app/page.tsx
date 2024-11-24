'use client'

import React from 'react'

import Link from 'next/link'

import { Typography } from '@/shared/ui/common/typography'

import classes from './_app-styles.module.scss'

const App = () => {
  return (
    <div className={classes.app}>
      <Typography component="h1" className={classes.title}>
        Welcome to the OCD dev guidelines!
      </Typography>

      <Link href="/home" className={classes.subtitle}>
        <Typography component="code">You&apos;re not alone.</Typography>
      </Link>
    </div>
  )
}

export default App

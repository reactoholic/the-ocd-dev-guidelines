'use client'

import React from 'react'

import {
  THEME_ID,
  createTheme as muiCreateTheme,
  ThemeProvider as MaterialThemeProvider
} from '@mui/material/styles'
import { Link, Paper, Typography } from '@mui/material'

const materialTheme = muiCreateTheme({
  palette: {
    primary: {
      main: '#4A90E2'
    },

    text: {
      primary: '#fff'
    },

    background: {
      default: '#333'
    }
  }
})

export default function App() {
  return (
    <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
      <Paper
        sx={(theme) => ({
          display: 'grid',
          placeItems: 'center',

          width: '100vw',
          height: '100vh',
          textWrap: 'pretty',
          padding: 'clamp(1rem, 5vw, 2rem)',
          backgroundColor: theme.palette.background.default
        })}
      >
        <Typography fontFamily="monospace" fontSize={'clamp(1.25rem, 5vw, 3.5rem)'}>
          Welcome to the OCD developer guidelines!
          <br />
          <Link href="/" underline="always">
            You&apos;re not alone.
          </Link>
        </Typography>
      </Paper>
    </MaterialThemeProvider>
  )
}

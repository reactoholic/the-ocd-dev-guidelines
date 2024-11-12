import { Link, Paper, Typography, useTheme, useMediaQuery } from '@mui/material'

export default function Home() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  console.log('isSmallScreen', isSmallScreen)

  return (
    <Paper
      sx={{
        display: 'grid',
        placeItems: 'center',

        width: '100vw',
        height: '100vh',
        textWrap: 'pretty',
        padding: 'clamp(1rem, 5vw, 2rem)',
        fontSize: 'clamp(1.25rem, 5vw, 2rem)'
      }}
    >
      <Typography variant={isSmallScreen ? 'body1' : 'h1'}>
        Welcome to the OCD developer guidelines!{' '}
        <Link href="#" underline="always">
          You&apos;re not alone.
        </Link>
      </Typography>
    </Paper>
  )
}

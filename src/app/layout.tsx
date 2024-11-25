import type { Metadata } from 'next'

import dynamic from 'next/dynamic'
import localFont from 'next/font/local'

import { PrimeReactProvider } from 'primereact/api'

import { Header } from './_header'

import '/public/styles/globals.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import '@/global-styles-and-overrides/global-styles-and-overrides.scss'

import classes from './_app-styles.module.scss'

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'The OCD dev guidelines',
  description: 'Style and structure guidelines for developers with OCD'
}

const ThemeProvider = dynamic(() => import('@/shared/context/theme.context'), { ssr: false })

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PrimeReactProvider value={{ ripple: true, cssTransition: true, locale: 'en' }}>
          <ThemeProvider>
            <div className={classes.mainLayout}>
              <Header />

              {children}
            </div>
          </ThemeProvider>
        </PrimeReactProvider>
      </body>
    </html>
  )
}

export default RootLayout

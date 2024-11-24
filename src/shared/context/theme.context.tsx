'use client'

import { useContext, createContext, PropsWithChildren } from 'react'

import { useLocalStorage } from '@uidotdev/usehooks'

import { constants } from '@/shared/constants'

// Theme Context
export const ThemeContext = createContext<null | ThemeContextType>(null)

// Theme Provider
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useLocalStorage<Theme>(constants.localStorageKeys.theme, Theme['LIGHT'])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider

// Theme Context Hook
export const useTheme = () => useContext(ThemeContext)

export const enum Theme {
  DARK = 'DARK',
  LIGHT = 'LIGHT'
}

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

'use client'

import { useState } from 'react'

import { InputSwitch } from 'primereact/inputswitch'

export const ThemeWidget = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = useState(false) // TODO: Замени useState с useLocalStorage от библиотеката с куките!

  return (
    <div className={className}>
      <InputSwitch checked={isDark} onChange={(e) => setIsDark(e.value)} />
    </div>
  )
}

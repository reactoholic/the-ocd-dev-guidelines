'use client'

import { useState } from 'react'

import { InputSwitch } from 'primereact/inputswitch'

export const ThemeWidget = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={className}>
      <InputSwitch checked={isDark} onChange={() => setIsDark(!isDark)} />
    </div>
  )
}

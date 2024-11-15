import React from 'react'

import Link from 'next/link'

export default function App() {
  return (
    <div className="w-full h-screen p-3 shadow-1" style={{ border: '5px solid' }}>
      <Link href="/home">Gou tu houm peijer</Link>
    </div>
  )
}

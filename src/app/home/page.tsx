import Link from 'next/link'

import { Button } from 'primereact/button'

export default function HomePage() {
  return (
    <div className="p-3">
      <Button className="p-2" label="Praim Baton" />
      <Link href="/">Gou tu lending peijer</Link>
    </div>
  )
}

import Link from 'next/link'

const HomePage = () => {
  console.log('<HomePage />')

  return (
    <div className="p-3" style={{ position: 'relative' }}>
      <Link href="/">Gou tu lending peijer</Link>
    </div>
  )
}

export default HomePage

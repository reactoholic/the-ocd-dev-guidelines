import Link from 'next/link'

import classes from './_home-styles.module.scss'

const HomePage = () => {
  return (
    <div className={classes.home}>
      <Link href="/">Gou tu lending peijer</Link>
    </div>
  )
}

export default HomePage

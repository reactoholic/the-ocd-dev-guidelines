import { useEffect, PropsWithChildren } from 'react'

import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const variants = {
  initial: { opacity: 0, x: 100 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } }
}

export function PageTransition({ children }: PropsWithChildren) {
  const { asPath } = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [asPath])

  return (
    <motion.div key={asPath} initial="initial" animate="enter" exit="exit" variants={variants}>
      {children}
    </motion.div>
  )
}

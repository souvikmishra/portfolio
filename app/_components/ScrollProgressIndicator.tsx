'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 h-2 origin-[0%] bg-gray-900 dark:bg-gray-200"
      style={{ scaleX }}
    />
  )
}

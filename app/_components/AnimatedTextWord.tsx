'use client'

import { motion } from 'framer-motion'

const AnimatedTextWord = ({
  text,
  prefixIcon,
  delay,
}: {
  text: string
  prefixIcon?: string
  delay?: number
}) => {
  const words = text.split(' ')
  const calculatedDelay = delay || 0

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: calculatedDelay + 0.06 * i,
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 180,
      },
    },
    hidden: {
      opacity: 0,
      y: 4,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 180,
      },
    },
  }

  return (
    <motion.div
      className="flex flex-wrap"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {prefixIcon !== undefined && (
        <span className="wave mr-2">{prefixIcon}</span>
      )}
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: '8px', letterSpacing: '-1px' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedTextWord

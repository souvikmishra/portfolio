'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function NavBar() {
  return (
    <motion.nav
      className="flex justify-between px-2 py-4"
      initial="initial"
      animate="animate"
      variants={NavBarAnimation}
    >
      <div className="flex items-center gap-[1ch]">
        <div className="h-5 w-5 rounded-full bg-yellow-400" />
        <span className="text-sm font-semibold tracking-widest dark:text-white">
          AVGWEB.DEV
        </span>
      </div>
      <div className="md:text-md flex gap-4 text-sm text-zinc-500 dark:text-zinc-300 md:gap-12">
        <Link href={'#'} className="font-semibold text-black dark:text-white">
          Home
        </Link>
        <a href={'#projects'}>Projects</a>
        <a href={'#contact'}>Contact</a>
      </div>
    </motion.nav>
  )
}

const NavBarAnimation = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
}

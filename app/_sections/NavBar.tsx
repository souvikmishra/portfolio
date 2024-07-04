'use client'

import Link from 'next/link'
import { NavBarAnimation } from '@utilities/animations'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const basePath = usePathname()
  const selectedRouteClass = 'font-semibold text-black dark:text-white'

  return (
    <motion.nav
      className="flex justify-between"
      initial="initial"
      animate="animate"
      variants={NavBarAnimation}
    >
      <div className="py-2">
        <Link href={'/'} className="flex items-center gap-[1ch] py-2  ">
          <div className="h-5 w-5 rounded-full bg-yellow-400" />
          <span className="text-sm font-semibold tracking-widest dark:text-white">
            AVGWEB.DEV
          </span>
        </Link>
      </div>
      <div className="md:text-md flex py-2 text-sm text-zinc-500 dark:text-zinc-300">
        <Link
          href={'/'}
          className={`rounded-md px-2 py-2 outline-none hover:bg-zinc-300 focus:bg-zinc-300 focus:outline-none md:px-4 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 ${
            basePath === '/' ? selectedRouteClass : ''
          }`}
        >
          Home
        </Link>
        <Link
          href={'/#projects'}
          className="rounded-md px-2 py-2 outline-none hover:bg-zinc-300 focus:bg-zinc-300 focus:outline-none md:px-4 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
        >
          Projects
        </Link>
        <Link
          href={'/myspace'}
          className={`${
            basePath !== '/' ? selectedRouteClass : ''
          } whitespace-nowrap rounded-md px-2 py-2 outline-none hover:bg-zinc-300 focus:bg-zinc-300 focus:outline-none md:px-4 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800`}
        >
          My Space
        </Link>
      </div>
    </motion.nav>
  )
}

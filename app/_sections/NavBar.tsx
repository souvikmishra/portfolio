'use client'

import Link from 'next/link'
import { NavBarAnimation } from '@utilities/animations'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from '../_components/ThemeSwitcher'

export default function NavBar() {
  const basePath = usePathname()
  const selectedRouteClass = 'font-semibold text-black dark:text-white'

  return (
    <motion.nav
      className="flex items-center justify-between"
      initial="initial"
      animate="animate"
      variants={NavBarAnimation}
    >
      <div className="flex items-center py-2">
        <Link href={'/'} className="flex items-center gap-[1ch] py-2  ">
          <div className="h-5 w-5 rounded-full bg-yellow-400" />
          <span className="text-sm font-semibold tracking-widest dark:text-white">
            AVGWEB.DEV
          </span>
        </Link>
        <div className="md:text-md ml-6 flex gap-2 py-2 text-sm text-zinc-500 dark:text-zinc-300">
          <Link
            href={'/'}
            className={`rounded-md px-2 py-2 outline-none hover:bg-zinc-300 focus:bg-zinc-300 focus:outline-none dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 md:px-4 ${
              basePath === '/' ? selectedRouteClass : ''
            }`}
          >
            Home
          </Link>
          <Link
            href={'/#projects'}
            className="rounded-md px-2 py-2 outline-none hover:bg-zinc-300 focus:bg-zinc-300 focus:outline-none dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 md:px-4"
          >
            Projects
          </Link>
          <Link
            href={'/myspace'}
            className={`${
              basePath !== '/' ? selectedRouteClass : ''
            } whitespace-nowrap rounded-md px-2 py-2 outline-none hover:bg-zinc-300 focus:bg-zinc-300 focus:outline-none dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 md:px-4`}
          >
            My Space
          </Link>
        </div>
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </motion.nav>
  )
}

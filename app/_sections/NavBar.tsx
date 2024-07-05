'use client'

import Link from 'next/link'
import { NavBarAnimation } from '@utilities/animations'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from '../_components/ThemeSwitcher'
import MobileNav from '../_components/MobileNav'
import cn from '../_utilities/cn'

export default function NavBar() {
  const [isActive, setIsActive] = useState(false)
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
        <div className="ml-6 hidden gap-2 py-2 text-sm text-zinc-500 dark:text-zinc-300 md:flex">
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
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <div
          onClick={() => {
            setIsActive(!isActive)
          }}
          className={cn(
            'z-50 flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded-full duration-500 md:hidden',
          )}
        >
          <div
            className={cn(
              "top-[3px] w-full before:relative before:left-0 before:top-[8px] before:m-auto before:block before:h-[2px] before:w-10 before:origin-top-left before:bg-black before:duration-300 before:content-[''] after:relative after:left-0 after:top-[-10px] after:m-auto after:block after:h-[2px] after:w-10 after:origin-bottom-left after:bg-black after:duration-300 after:content-[''] dark:before:bg-white dark:after:bg-white",
              {
                'h-0 before:left-[-3px] before:top-3 before:-rotate-45 after:left-[1.8px] after:top-[-10.5px] after:rotate-45':
                  isActive,
                'h-[2px] bg-black dark:bg-white': !isActive,
              },
            )}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <MobileNav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.nav>
  )
}

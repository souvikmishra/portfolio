import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { slide, scale, menuSlide } from '../_utilities/animations'
import { LABELS, LINKS } from '../_utilities/common'
const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '#/projects',
  },
  {
    title: 'My Space',
    href: '/myspace',
  },
  {
    title: 'Connect',
    href: LINKS.EMAIL,
  },
]

export function MobileNavCurve() {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q-100 ${window.innerHeight / 2} 100 0`
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q100 ${window.innerHeight / 2} 100 0`

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  }

  return (
    <svg className="absolute left-[-99px] top-0 h-full w-[100px] fill-zinc-300 stroke-none dark:fill-zinc-800">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  )
}

type NavLinkProps = {
  data: { title: string; href: string; index: number }
  isActive: boolean
  setIsActive: (value: boolean) => void
  setSelectedIndicator: (href: string) => void
}

export function MobileNavLink({
  data,
  isActive,
  setIsActive,
  setSelectedIndicator,
}: NavLinkProps) {
  const { title, href, index } = data

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href)
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className="absolute left-[-30px] h-[10px] w-[10px] rounded-full bg-black dark:bg-white"
      ></motion.div>
      <Link
        onClick={() => setIsActive(false)}
        className=" text-6xl text-black dark:text-white"
        href={href}
      >
        {title}
      </Link>
    </motion.div>
  )
}

export function MoblileNavFooter() {
  return (
    <div className="flex w-full cursor-pointer justify-between gap-10 text-xs">
      <a
        href={LINKS.INSTAGRAM}
        aria-label={LABELS.INSTAGRAM}
        className="font-light text-black no-underline dark:text-white"
        target="_blank"
      >
        Instagram
      </a>
      <a
        href={LINKS.GITHUB}
        aria-label={LABELS.GITHUB}
        className="font-light text-black no-underline dark:text-white"
        target="_blank"
      >
        Github
      </a>
      <a
        href={LINKS.LINKEDIN}
        aria-label={LABELS.LINKEDIN}
        className="font-light text-black no-underline dark:text-white"
        target="_blank"
      >
        LinkedIn
      </a>
      <a
        href={LINKS.TWITTER}
        aria-label={LABELS.TWITTER}
        className="font-light text-black no-underline dark:text-white"
        target="_blank"
      >
        Twitter
      </a>
    </div>
  )
}

export default function MobileNav({
  setIsActive,
}: {
  setIsActive: (value: boolean) => void
}) {
  const pathname = usePathname()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 z-40 block h-screen w-full bg-zinc-300 text-white dark:bg-zinc-800 md:hidden"
    >
      <div className="flex h-full flex-col justify-between p-[60px] sm:p-[100px]">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname)
          }}
          className="mt-20 flex flex-col gap-3"
        >
          <div className="mb-10 border-b border-gray-600 text-xs uppercase text-gray-600 dark:border-gray-400 dark:text-gray-400">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <MobileNavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setIsActive={setIsActive}
                setSelectedIndicator={setSelectedIndicator}
              ></MobileNavLink>
            )
          })}
        </div>
        <MoblileNavFooter />
      </div>
      <MobileNavCurve />
    </motion.div>
  )
}

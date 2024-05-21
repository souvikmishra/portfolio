'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

function MySpace() {
  const MY_SPACE_LINKS = [
    {
      name: 'Blogs to document my journey as a developer',
      emoji: '💻',
      slug: '/blog',
      active: true,
    },
    {
      name: 'Poems to express my personal journey',
      emoji: '📝',
      slug: '/poems',
    },
    {
      name: 'Sketches to keep my artistic side alive',
      emoji: '🎨',
      slug: '/sketches',
    },
    {
      name: " Wallpapers I've made for me and my friends",
      emoji: '🖼️',
      slug: '/wallpapers',
    },
    {
      name: 'My philosophy on life and other things',
      emoji: '🤔',
      slug: '/philosophy',
    },
    {
      name: 'Books that I have read and recommend',
      emoji: '📚',
      slug: '/books',
    },
    {
      name: 'A special something for people who are really curious',
      emoji: '🤭',
      slug: 'https://bit.ly/3BlS71b',
      isExternal: true,
      active: true,
    },
  ]

  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.7,
      },
    },
  }

  const listItem = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      x: 5,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 120,
      },
    },
  }

  const mainTextFadeIn = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 120,
        delay: 0.3,
      },
    },
  }
  const secondaryTextFadeIn = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 120,
        delay: 0.5,
      },
    },
  }

  return (
    <section id="myspace" className="prose prose-invert mx-auto mb-6">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={mainTextFadeIn}
        className="mb-4 mt-6 text-4xl text-gray-200"
      >
        A place where I put stuff for safekeeping and sharing with folks like
        you!
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={secondaryTextFadeIn}
        className="mb-8 leading-6 text-gray-200"
      >
        This is my humble space on the internet where I keep stuff that I like,
        create, read or think. It&apos;s a place where I can be myself and
        express myself freely. I hope you find something that you like here. And
        if you do find something that you like, please let me know. I would love
        to hear it from you. 😊
      </motion.p>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={listContainer}
        className="not-prose flex flex-col text-gray-200"
      >
        {MY_SPACE_LINKS.map((link) => (
          <motion.li variants={listItem} key={link.slug}>
            <Link
              href={link.slug}
              target={link.isExternal ? '_blank' : ''}
              tabIndex={link.active ? 0 : -1}
              className={`group flex items-start rounded-md px-2 py-1 outline-none duration-300 ease-in-out  hover:translate-x-2 hover:bg-zinc-900 focus:translate-x-2 focus:bg-zinc-900 focus:outline-none ${
                link.active ? '' : 'no pointer-events-none text-gray-500'
              }`}
            >
              <span className="text-xl">{link.emoji}</span>
              &nbsp; &nbsp;{' '}
              <span
                className={`group-hover:underline ${
                  link.active ? '' : 'line-through'
                } `}
              >
                {link.name}
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default MySpace

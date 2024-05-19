'use client'

import React from 'react'
import Socials from './Socials'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.footer
      id="contact"
      initial="initial"
      whileInView="animate"
      variants={ContactAnimation}
    >
      <div className="mb-6 flex flex-col gap-8 rounded-3xl bg-[url('/gradient-bg.webp')] bg-cover p-10 tablet:gap-16">
        <h3 className="text-4xl font-semibold">
          Want to work together? Let&apos;s talk!
        </h3>
        <div className="flex flex-wrap items-center justify-between tablet:flex-nowrap">
          <p className="text-lg tablet:flex-1">
            Feel free to reach out if you have any questions. I&apos;m always
            available for a quick chat.
            <br /> Unless its 3 A.M. then I&apos;m probably working.
          </p>
          <span className="flex w-full justify-center pr-0 text-7xl tablet:w-auto tablet:pr-14 tablet:text-9xl">
            👨🏽‍💻
          </span>
        </div>
        <Socials />
      </div>
    </motion.footer>
  )
}

const ContactAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
}

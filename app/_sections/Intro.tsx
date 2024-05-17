'use client'

import { HeroLeftAnimation, HeroRightAnimation } from '../_utilities/animations'

import React from 'react'
import Socials from '../_components/Socials'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className="mb-4 grid grid-cols-1 gap-4 tablet:grid-cols-[8fr_4fr]">
      <motion.div
        className="flex flex-col gap-8 rounded-3xl bg-[url('/gradient-bg.webp')] bg-cover p-10 tablet:h-[30rem] tablet:gap-16"
        initial="initial"
        animate="animate"
        variants={HeroLeftAnimation}
      >
        <h1 className="text-4xl font-semibold">
          👋 Hi! I&apos;m Souvik, a web developer and part-time designer.
        </h1>
        <h2 className="tablet:flex-1">
          I care a lot about using code+design to create a positive impact and
          enjoy creating user-centric and highly-efficient human experiences.
        </h2>
        <Socials />
      </motion.div>
      <motion.div
        className="h-[30rem] rounded-3xl bg-[url('/portfolio-headshot.webp')] bg-cover bg-center p-8 dark:contrast-[1.15]"
        initial="initial"
        animate="animate"
        variants={HeroRightAnimation}
      ></motion.div>
    </section>
  )
}

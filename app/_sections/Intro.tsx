'use client'

import { HeroLeftAnimation, HeroRightAnimation } from '@utilities/animations'

import React from 'react'
import Socials from './Socials'
import { motion } from 'framer-motion'
import AnimatedTextWord from '@components/AnimatedTextWord'

export default function Intro() {
  return (
    <section className="mb-4 grid grid-cols-1 gap-4 tablet:grid-cols-[8fr_4fr]">
      <motion.div
        className="flex flex-col gap-8 rounded-3xl bg-[url('/gradient-bg.webp')] bg-cover px-6 py-8 md:p-10 tablet:h-[30rem] tablet:gap-16"
        initial="initial"
        animate="animate"
        variants={HeroLeftAnimation}
      >
        <h1 className="flex text-4xl font-semibold">
          <AnimatedTextWord
            prefixIcon="👋"
            text="Hi! I'm Souvik, a web developer,
          designer and product engineer."
          />
        </h1>
        <h2 className="text-lg tablet:flex-1">
          <AnimatedTextWord
            delay={1.7}
            text="I care a lot about using code & design to create a positive impact and
          enjoy creating user centric and highly efficient human experiences."
          />
        </h2>
        <Socials />
      </motion.div>
      <motion.div
        className="flex h-[30rem] rounded-3xl bg-[url('/outline-hero.svg')] bg-cover bg-center bg-no-repeat"
        initial="initial"
        animate="animate"
        variants={HeroRightAnimation}
      ></motion.div>
    </section>
  )
}

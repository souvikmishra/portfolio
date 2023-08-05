'use client';

import React from 'react';
import Socials from '../components/Socials';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="grid grid-cols-1 tablet:grid-cols-[8fr_4fr] gap-4 mb-4">
      <motion.div
        className="tablet:h-[30rem] rounded-3xl p-10 flex flex-col gap-8 tablet:gap-16 bg-[url('/gradient-bg.jpg')] bg-cover"
        initial="initial"
        animate="animate"
        variants={IntroLeftAnimation}
      >
        <h1 className="text-4xl font-semibold">
          👋 Hi! I&apos;m Souvik, a web developer and part-time designer.
        </h1>
        <p className="tablet:flex-1">
          I care a lot about using code+design to create a positive impact and
          enjoy creating user—centric, highly-efficient, and human experiences.
        </p>
        <Socials />
      </motion.div>
      <motion.div
        className="h-[30rem] rounded-3xl p-8 bg-[url('/portfolio-headshot.png')] bg-cover bg-center dark:contrast-[1.15]"
        initial="initial"
        animate="animate"
        variants={IntroRightAnimation}
      ></motion.div>
    </section>
  );
}

const IntroLeftAnimation = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};
const IntroRightAnimation = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

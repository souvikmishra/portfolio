'use client';

import React from 'react';
import Socials from '../components/Socials';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial="initial"
      whileInView="animate"
      variants={ContactAnimation}
    >
      <div className="rounded-3xl p-10 mb-6 flex flex-col gap-8 tablet:gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
        <h1 className="text-4xl font-semibold">
          Want to work together? Let&apos;s talk!
        </h1>
        <p className="tablet:flex-1">
          Feel free to reach out if you have any questions. I&apos;m always
          available for a quick chat.
          <br /> Unless its 3 A.M. Then I&apos;m probably working 👨‍💻.
        </p>
        <Socials />
      </div>
    </motion.section>
  );
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
};

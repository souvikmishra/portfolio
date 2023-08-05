'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <motion.nav
      className="flex justify-between py-4 px-2"
      initial="initial"
      animate="animate"
      variants={NavBarAnimation}
    >
      <div className="flex gap-[1ch] items-center">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="dark:text-white text-sm font-semibold tracking-widest">
          AVGWEB.DEV
        </span>
      </div>
      <div className="flex md:gap-12 gap-4 md:text-md text-sm text-zinc-400">
        <Link href={'#'} className="text-black dark:text-white font-medium">
          Home
        </Link>
        <a href={'#projects'}>Projects</a>
        <a href={'#contact'}>Contact</a>
      </div>
    </motion.nav>
  );
}

const NavBarAnimation = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

import { BentoFadeInAnimation } from '@utilities/animations'
import { GoArrowUpRight } from 'react-icons/go'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  name?: string | undefined
  description?: string | undefined
  imageUrl?: string | undefined
  bgColor?: string | undefined
  isDark?: boolean | undefined
  href?: string | undefined
}

export default function ProjectPreview({
  name = 'Project Name',
  description = 'Project Description',
  imageUrl = '/stay-tuned.webp',
  bgColor = '#e4e4e7',
  isDark = false,
  href = '#',
}: Props) {
  return (
    <motion.div
      className="h-[30rem] overflow-hidden rounded-3xl"
      style={{ background: `${bgColor}` }}
      initial="initial"
      whileInView="animate"
      variants={BentoFadeInAnimation}
    >
      <Link
        href={href}
        target={href === '#' ? '' : '_blank'}
        className="group relative block h-full w-full cursor-pointer p-6 md:px-10"
      >
        <div
          className="absolute left-0 top-0 h-full w-full bg-contain bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:scale-110 group-focus:scale-110"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
        <div className="flex justify-between">
          <div>
            <h2
              className={`text-lg font-medium  ${isDark ? 'text-white' : ''}`}
            >
              {name}
            </h2>
            <p
              className={`text-sm  ${
                isDark ? 'text-zinc-100' : 'text-zinc-500'
              }`}
            >
              {description}
            </p>
          </div>
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white outline-none group-focus:outline group-focus:outline-white">
            <GoArrowUpRight className="h-6 w-6" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

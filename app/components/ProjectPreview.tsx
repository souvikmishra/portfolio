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

const ProjectPreview: React.FC<Props> = ({
  name = 'Project Name',
  description = 'Project Description',
  imageUrl = './stay-tuned.webp',
  bgColor = '#e4e4e7',
  isDark = false,
  href = '#',
}) => {
  return (
    <motion.div
      className="h-[30rem] overflow-hidden rounded-3xl"
      style={{ background: `${bgColor}` }}
      initial="initial"
      whileInView="animate"
      variants={PreviewAnimation}
    >
      <Link
        href={href}
        target={href === '#' ? '' : '_blank'}
        className="group block h-full w-full cursor-pointer bg-contain bg-center bg-no-repeat px-10 py-6 transition-all duration-500 ease-in-out hover:scale-105 focus-visible:scale-105"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
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
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white group-focus-within:outline group-focus:outline-2 group-focus:outline-offset-1 group-focus:outline-blue-800">
            <GoArrowUpRight className="h-6 w-6" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

const PreviewAnimation = {
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
      duration: 0.3,
    },
  },
}

export default ProjectPreview

'use client'
import Link from 'next/link'
import React from 'react'
import getFormattedDate from '@utilities/getFormattedDate'
import { motion } from 'framer-motion'
import { BentoFadeInAnimation } from '@utilities/animations'

interface PoemProps {
  slug: string
  title: string
  date: string
}

function PoemPreview({
  title = 'Poem Title',
  date = '0000-00-00',
  slug = 'test-slug',
}: PoemProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={BentoFadeInAnimation}
      className="group relative cursor-pointer rounded-3xl"
    >
      <Link href={`/poems/${slug}`}>
        <div className="absolute left-0 top-0 h-full w-full rounded-3xl border border-dashed border-gray-900 bg-transparent dark:border-gray-200"></div>
        <div className="rounded-3xl border-2 border-gray-900 bg-white p-6 transition-all duration-300 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2 dark:border-gray-200 dark:bg-[#0c0c0c]">
          <h2 className="z-10 text-2xl font-medium text-gray-900 dark:text-gray-200">
            {title}
          </h2>
          <p className="z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-500">
            {getFormattedDate(date)}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default PoemPreview

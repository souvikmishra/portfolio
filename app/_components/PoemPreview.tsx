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
      className="group relative rounded-3xl"
    >
      <Link href={`/poem/${slug}`}>
        <div className="absolute left-0 top-0 h-full w-full rounded-3xl border border-dashed bg-transparent group-hover:border-gray-200"></div>
        <div className="rounded-3xl border border-gray-200 bg-[#0c0c0c] p-6 transition-all duration-300 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2">
          <h2 className="z-10 text-2xl font-medium text-gray-200">{title}</h2>
          <p className="z-10 mt-1 text-sm text-zinc-500">
            {getFormattedDate(date)}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default PoemPreview

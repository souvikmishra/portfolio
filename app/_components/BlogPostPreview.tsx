'use client'

import { BentoFadeInAnimation } from '@utilities/animations'
import Link from 'next/link'
import { motion } from 'framer-motion'
import getFormattedDate from '@utilities/getFormattedDate'

interface Props {
  slug: string
  title: string
  description: string
  readingTime: string
  tags?: string[]
  date: string
  imageUrl?: string | undefined
  bgColor?: string | undefined
  isDark?: boolean | undefined
  isFeatured?: boolean | undefined
}

export default function BlogPostPreview({
  title = 'Blog Title',
  tags = ['tag1', 'tag2', 'tag3'],
  date = '0000-00-00',
  slug = 'test-slug',
  readingTime = '4 min read',
  description = 'This is a test description',
}: Props) {
  return (
    <motion.article
      initial="initial"
      whileInView="animate"
      variants={BentoFadeInAnimation}
    >
      <Link
        href={`/blog/${slug}`}
        className="flex h-full w-full cursor-pointer flex-col justify-between gap-4 rounded-3xl border border-gray-200 bg-transparent px-6 py-6 text-gray-200 transition-all duration-500 ease-out hover:scale-[1.02] hover:bg-gray-200 hover:text-gray-900 focus:scale-[1.02] focus:bg-gray-200 focus:text-gray-900 lg:flex-row"
      >
        <div className="flex w-full flex-col">
          <div className="mb-4 flex items-center gap-2 text-xs">
            <span>{readingTime}</span> |
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h2 className="text-2xl font-medium">{title}</h2>
          <p className="mt-1 text-sm text-zinc-500">{description}</p>
        </div>
        <div className="flex flex-col justify-end">
          <span className="whitespace-nowrap text-base">
            {getFormattedDate(date)}
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

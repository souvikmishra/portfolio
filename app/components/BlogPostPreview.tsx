'use client'

import {
  BentoFadeInAnimation,
  FeaturedBlogPreviewAnimation,
} from '../utilities/animations'

import { GoArrowUpRight } from 'react-icons/go'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
  isDark = false,
  isFeatured = false,
  description = 'This is a test description',
}: Props) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={
        isFeatured ? FeaturedBlogPreviewAnimation : BentoFadeInAnimation
      }
    >
      <div className="rounded-3xl border border-gray-200 bg-transparent text-gray-200 transition-all duration-500 ease-out hover:scale-105 focus-visible:scale-105">
        <Link
          href={`/blog/${slug}`}
          className="group flex h-full w-full cursor-pointer justify-between gap-4 px-10 py-6"
        >
          <div className="flex w-full flex-col justify-between">
            <h2
              className={`line-clamp-1 text-4xl font-medium ${
                isDark ? 'text-gray-200' : ''
              }`}
            >
              {title}
            </h2>
            <p
              className={`mt-2 line-clamp-1 text-sm ${
                isDark ? 'text-zinc-100' : 'text-zinc-500'
              }`}
            >
              {description}...
            </p>
          </div>
          <div className="flex flex-col items-end justify-between text-right">
            <div className="flex items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-semibold ${
                    isDark ? 'text-gray-200' : 'text-zinc-500'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-sm">{date}</span>
              <span className="text-xs">{readingTime}</span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

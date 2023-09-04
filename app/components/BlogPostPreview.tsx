import {
  BentoFadeInAnimation,
  FeaturedBlogPreviewAnimation,
} from '../utilities/animations'

import { GoArrowUpRight } from 'react-icons/go'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
  title?: string | undefined
  content?: string | undefined
  tags?: string[] | undefined
  date?: string | undefined
  slug?: string | undefined
  readingTime?: string | undefined
  imageUrl?: string | undefined
  bgColor?: string | undefined
  isDark?: boolean | undefined
  isFeatured?: boolean | undefined
}

export default function BlogPostPreview({
  title = 'Blog Title',
  content = 'This is test content',
  tags = ['tag1', 'tag2', 'tag3'],
  date = '0000-00-00',
  slug = 'test-slug',
  readingTime = 'test min read',
  imageUrl = './stay-tuned.webp',
  bgColor = '#e4e4e7',
  isDark = false,
  isFeatured = false,
}: Props) {
  return (
    <motion.div
      className="h-[30rem] overflow-hidden rounded-3xl"
      style={{ background: `${bgColor}` }}
      initial="initial"
      whileInView="animate"
      variants={
        isFeatured ? FeaturedBlogPreviewAnimation : BentoFadeInAnimation
      }
    >
      <Link
        href={`/blog/${slug}`}
        className="group block h-full w-full cursor-pointer bg-contain bg-center bg-no-repeat px-10 py-6 transition-all duration-500 ease-in-out hover:scale-105 focus-visible:scale-105"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="flex justify-between">
          <div>
            <h2
              className={`text-lg font-medium  ${isDark ? 'text-white' : ''}`}
            >
              {title}
            </h2>
            <p
              className={`text-sm  ${
                isDark ? 'text-zinc-100' : 'text-zinc-500'
              }`}
            >
              {content.slice(0, 40)}...
            </p>
          </div>
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white group-focus-within:outline group-focus:outline-2 group-focus:outline-offset-1 group-focus:outline-blue-800">
            <GoArrowUpRight className="h-6 w-6" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

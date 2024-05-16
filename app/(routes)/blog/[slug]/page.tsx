import React from 'react'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/app/_utilities/getFormattedDate'
import Link from 'next/link'
import { getBlogData, getBlogsData } from '@/app/_utilities/blogs'

export function generateStaticParams() {
  const posts = getBlogsData()
  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = getBlogsData()
  const { slug } = params

  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const posts = getBlogsData('asc')
  const { slug } = params

  const postIndex = posts.findIndex((post) => post.slug === slug)

  if (postIndex === -1) {
    return notFound()
  }

  const prevPostSlug = postIndex > 0 ? posts[postIndex - 1].slug : null
  const nextPostSlug =
    postIndex < posts.length - 1 ? posts[postIndex + 1].slug : null

  const { title, date, contentHtml, readingTime } = await getBlogData(slug)
  const pubDate = getFormattedDate(date)

  return (
    <main className="mx-auto w-full rounded-3xl pt-4 lg:pt-8">
      <div className="prose prose-invert mx-auto">
        <h1>{title}</h1>
        <div className="-mt-4 mb-8 flex items-end justify-between">
          <p className="not-prose text-base">{pubDate}</p>
          <p className="not-prose text-sm">{readingTime}</p>
        </div>

        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
          <p className="flex items-center justify-between">
            {prevPostSlug !== null && (
              <Link
                href={`/blog/${prevPostSlug}`}
                className="flex items-center"
              >
                Read Previous Blog
              </Link>
            )}
            <Link href="/blog">Back to home</Link>
            {nextPostSlug !== null && (
              <Link
                href={`/blog/${nextPostSlug}`}
                className="flex items-center"
              >
                Read Next Blog
              </Link>
            )}
          </p>
        </article>
      </div>
    </main>
  )
}

import React from 'react'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/app/_utilities/getFormattedDate'
import Link from 'next/link'
import { getBlogData, getSortedBlogsData } from '@/app/_utilities/blogs'

export function generateStaticParams() {
  const posts = getSortedBlogsData()
  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = getSortedBlogsData()
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
  const posts = getSortedBlogsData()
  const { slug } = params

  if (!posts.find((post) => post.slug === slug)) {
    return notFound()
  }

  const { title, date, contentHtml } = await getBlogData(slug)

  const pubDate = getFormattedDate(date)

  return (
    <main className="mx-auto w-full rounded-3xl p-9">
      <div className="prose prose-invert mx-auto">
        <h1>{title}</h1>
        <p className="not-prose">{pubDate}</p>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
          <p>
            <Link href="/blog">Back to home</Link>
          </p>
        </article>
      </div>
    </main>
  )
}

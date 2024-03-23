import { getBlogData, getSortedBlogsData } from '@/lib/blogs'
import React from 'react'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

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
    <main className="prose prose-invert mb-4 mt-8 w-full rounded-3xl p-9">
      <h1>{title}</h1>
      <p>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
        <p>
          <Link href="/blog">Back to home</Link>
        </p>
      </article>
    </main>
  )
}

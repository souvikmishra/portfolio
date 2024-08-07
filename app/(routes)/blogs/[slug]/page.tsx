import React from 'react'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/app/_utilities/getFormattedDate'
import { getBlogData, getBlogsData } from '@/app/_utilities/blogs'
import { ScrollProgressIndicator } from '@components/ScrollProgressIndicator'
import FooterNavButton from '@/app/_components/FooterNavButton'

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
    <main className="mx-auto w-full rounded-3xl pb-2 pt-4 lg:pt-8">
      <ScrollProgressIndicator />
      <div className="prose mx-auto dark:prose-invert">
        <h1>{title}</h1>
        <div className="-mt-4 mb-8 flex items-end justify-between">
          <p className="not-prose text-base">{pubDate}</p>
          <p className="not-prose text-sm">{readingTime}</p>
        </div>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
          <p className="mb-20 mt-12 grid grid-cols-2 gap-4 lg:gap-6">
            {prevPostSlug !== null && (
              <FooterNavButton type="prev" href={`/blogs/${prevPostSlug}`}>
                Previous blog
              </FooterNavButton>
            )}
            {/* <FooterNavButton href="/blogs">Back to blogs</FooterNavButton> */}
            {nextPostSlug !== null && (
              <FooterNavButton type="next" href={`/blogs/${nextPostSlug}`}>
                Next blog
              </FooterNavButton>
            )}
          </p>
        </article>
      </div>
    </main>
  )
}

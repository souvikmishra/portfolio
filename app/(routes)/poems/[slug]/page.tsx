import React from 'react'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/app/_utilities/getFormattedDate'
import Link from 'next/link'
import { getPoemData, getPoemsData } from '@/app/_utilities/poems'

export function generateStaticParams() {
  const poems = getPoemsData()
  return poems.map((poem) => ({
    params: {
      slug: poem.slug,
    },
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const poems = getPoemsData()
  const { slug } = params

  const poem = poems.find((poem) => poem.slug === slug)

  if (!poem) {
    return {
      title: 'Poem Not Found',
    }
  }

  return {
    title: poem.title,
  }
}

export default async function Poem({ params }: { params: { slug: string } }) {
  const poems = getPoemsData('asc')
  const { slug } = params

  const poemIndex = poems.findIndex((poem) => poem.slug === slug)

  if (poemIndex === -1) {
    return notFound()
  }

  const prevPostSlug = poemIndex > 0 ? poems[poemIndex - 1].slug : null
  const nextPoemSlug =
    poemIndex < poems.length - 1 ? poems[poemIndex + 1].slug : null

  const { title, date, contentHtml } = await getPoemData(slug)
  const pubDate = getFormattedDate(date)

  return (
    <main className="mx-auto w-full rounded-3xl pt-4 lg:pt-8">
      <div className="prose prose-invert mx-auto">
        <h1>{title}</h1>
        <div className="-mt-4 mb-8 flex items-end justify-between">
          <p className="not-prose text-sm">{pubDate}</p>
        </div>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
          <p className="mb-20 mt-12 flex items-center justify-between">
            {prevPostSlug !== null && (
              <Link
                href={`/poems/${prevPostSlug}`}
                className="flex items-center"
              >
                Previous poem
              </Link>
            )}
            <Link href="/poems">Back to poems</Link>
            {nextPoemSlug !== null && (
              <Link
                href={`/poems/${nextPoemSlug}`}
                className="flex items-center"
              >
                Next poem
              </Link>
            )}
          </p>
        </article>
      </div>
    </main>
  )
}

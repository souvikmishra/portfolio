import React from 'react'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/app/_utilities/getFormattedDate'
import { getPoemData, getPoemsData } from '@/app/_utilities/poems'
import FooterNavButton from '@/app/_components/FooterNavButton'

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
    <main className="mx-auto w-full rounded-3xl pb-2 pt-4 lg:pt-8">
      <div className="prose mx-auto dark:prose-invert">
        <h1>{title}</h1>
        <div className="-mt-4 mb-8 flex items-end justify-between">
          <p className="not-prose text-sm">{pubDate}</p>
        </div>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
          <p className="mb-20 mt-12 grid grid-cols-2 gap-4 lg:gap-6">
            {prevPostSlug !== null && (
              <FooterNavButton type="prev" href={`/poems/${prevPostSlug}`}>
                Previous poem
              </FooterNavButton>
            )}
            {/* <FooterNavButton href="/poems">Back to poems</FooterNavButton> */}
            {nextPoemSlug !== null && (
              <FooterNavButton type="next" href={`/poems/${nextPoemSlug}`}>
                Next poem
              </FooterNavButton>
            )}
          </p>
        </article>
      </div>
    </main>
  )
}

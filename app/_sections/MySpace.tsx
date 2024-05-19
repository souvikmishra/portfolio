import Link from 'next/link'
import React from 'react'

function MySpace() {
  const MY_SPACE_LINKS = [
    {
      name: 'Blogs to document my journey as a developer',
      emoji: '💻',
      slug: '/blog',
      active: true,
    },
    {
      name: 'Poems to express my personal journey',
      emoji: '📝',
      slug: '/poems',
    },
    {
      name: 'Sketches to keep my artistic side alive',
      emoji: '🎨',
      slug: '/sketches',
    },
    {
      name: " Wallpapers I've made for me and my friends",
      emoji: '🖼️',
      slug: '/wallpapers',
    },
    {
      name: 'My philosophy on life and other things',
      emoji: '🤔',
      slug: '/philosophy',
    },
    {
      name: 'Books that I have read and recommend',
      emoji: '📚',
      slug: '/books',
    },
    {
      name: 'A special something for people who are really curious',
      emoji: '🤭',
      slug: 'https://bit.ly/3BlS71b',
      isExternal: true,
      active: true,
    },
  ]

  return (
    <section id="myspace" className="prose prose-invert mx-auto">
      <h1 className="mb-4 mt-6 text-4xl text-gray-200">
        A place where I put stuff for safekeeping and sharing with folks like
        you!
      </h1>
      <p className="mb-8 leading-6 text-gray-200">
        This is my humble space on the internet where I keep stuff that I like,
        create, read or think. It&apos;s a place where I can be myself and
        express myself freely. I hope you find something that you like here. And
        if you do find something that you like, please let me know. I would love
        to hear it from you. 😊
      </p>
      <ul className="not-prose flex flex-col gap-1 text-gray-200">
        {MY_SPACE_LINKS.map((link) => (
          <li key={link.slug}>
            <Link
              href={link.slug}
              target={link.isExternal ? '_blank' : ''}
              className={`flex items-start duration-300 ease-in-out hover:translate-x-2 ${
                link.active ? '' : 'pointer-events-none text-gray-500'
              }`}
            >
              <span className="text-xl">{link.emoji}</span>
              &nbsp; &nbsp;{' '}
              <span
                className={`hover:underline ${
                  link.active ? '' : 'line-through'
                } `}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MySpace

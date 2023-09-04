'use client'

import BlogPostPreview from '../components/BlogPostPreview'

const blogs = [
  {
    id: 1,
    title: 'Blog 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    tags: ['tag1', 'tag2', 'tag3'],
    date: '2021-07-01',
    slug: 'blog-1',
    readingTime: '2 min read',
    imageUrl: './stay-tuned.webp',
  },
  {
    id: 2,
    title: 'Blog 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    tags: ['tag1', 'tag2', 'tag3'],
    date: '2021-07-01',
    slug: 'blog-2',
    readingTime: '2 min read',
    imageUrl: './stay-tuned.webp',
  },
  {
    id: 3,
    title: 'Blog 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    tags: ['tag1', 'tag2', 'tag3'],
    date: '2021-07-01',
    slug: 'blog-3',
    readingTime: '2 min read',
    imageUrl: './stay-tuned.webp',
  },
  {
    id: 4,
    title: 'Blog 4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    tags: ['tag1', 'tag2', 'tag3'],
    date: '2021-07-01',
    slug: 'blog-4',
    readingTime: '2 min read',
    imageUrl: './stay-tuned.webp',
  },
  {
    id: 5,
    title: 'Blog 5',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    tags: ['tag1', 'tag2', 'tag3'],
    date: '2021-07-01',
    slug: 'blog-5',
    readingTime: '2 min read',
    imageUrl: './stay-tuned.webp',
  },
  {
    id: 6,
    title: 'Blog 6',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    tags: ['tag1', 'tag2', 'tag3'],
    date: '2021-07-01',
    slug: 'blog-6',
    readingTime: '2 min read',
    imageUrl: './stay-tuned.webp',
  },
  // {
  //   id: 7,
  //   title: 'Blog 7',
  //   content:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  //   tags: ['tag1', 'tag2', 'tag3'],
  //   date: '2021-07-01',
  //   slug: 'blog-7',
  //   readingTime: '2 min read',
  //   imageUrl: './stay-tuned.webp',
  // },
]

export default function Page() {
  return (
    <>
      <div className="my-4 grid grid-cols-1 gap-4">
        <BlogPostPreview
          title={blogs[0].title}
          content={blogs[0].content}
          tags={blogs[0].tags}
          date={blogs[0].date}
          slug={blogs[0].slug}
          readingTime={blogs[0].readingTime}
          imageUrl={blogs[0].imageUrl}
          isFeatured
        />
      </div>
      <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {blogs.slice(1).map((blog) => {
          return (
            <BlogPostPreview
              key={blog.id}
              title={blog.title}
              content={blog.content}
              tags={blog.tags}
              date={blog.date}
              slug={blog.slug}
              readingTime={blog.readingTime}
              imageUrl={blog.imageUrl}
            />
          )
        })}
        {blogs.length % 2 === 0 && <BlogPostPreview />}
      </div>
    </>
  )
}

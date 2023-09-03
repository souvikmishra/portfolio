import BlogPost from '../components/BlogPost'

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
]

const blogPosts = blogs.map((blog) => {
  return (
    <BlogPost
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
})

export default function Page() {
  return (
    <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
      {blogPosts}
    </div>
  )
}

import React from 'react'
import { getSortedBlogsData } from '@/lib/blogs'
import BlogPostPreview from './BlogPostPreview'

function Blogs() {
  const blogs = getSortedBlogsData()
  return (
    <section id="projects">
      <ul className="mb-4 mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {blogs.map((blog) => (
          <BlogPostPreview {...blog} key={blog.slug} />
        ))}
      </ul>
    </section>
  )
}

export default Blogs

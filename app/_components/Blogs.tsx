import React from 'react'
import BlogPostPreview from './BlogPostPreview'
import { getBlogsData } from '../_utilities/blogs'

function Blogs() {
  const blogs = getBlogsData()
  return (
    <section id="projects">
      <ul className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <BlogPostPreview {...blog} key={blog.slug} />
        ))}
      </ul>
    </section>
  )
}

export default Blogs

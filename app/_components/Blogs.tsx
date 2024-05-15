import React from 'react'
import BlogPostPreview from './BlogPostPreview'
import { getSortedBlogsData } from '../_utilities/blogs'

function Blogs() {
  const blogs = getSortedBlogsData()
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

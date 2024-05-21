import React from 'react'
import BlogPostPreview from '@components/BlogPostPreview'
import { getBlogsData } from '@utilities/blogs'

function Blogs() {
  const blogs = getBlogsData()
  return (
    <section id="projects">
      <div className="mb-6 flex flex-col gap-4">
        {blogs.map((blog) => (
          <BlogPostPreview {...blog} key={blog.slug} />
        ))}
      </div>
    </section>
  )
}

export default Blogs

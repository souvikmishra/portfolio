import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'blogs')

export function getBlogsData(sortDirection: 'asc' | 'desc' = 'desc') {
  const fileNames = fs.readdirSync(postsDirectory)
  const allBlogsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const blogPost: BlogPost = {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
      description: matterResult.data.description,
      readingTime: matterResult.data.readingTime,
    }
    return blogPost
  })

  return sortDirection === 'desc'
    ? allBlogsData.sort((a, b) => (a.date < b.date ? 1 : -1))
    : allBlogsData.sort((a, b) => (a.date > b.date ? 1 : -1))
}

export async function getBlogData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  //use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  const blogPostWithHtml: BlogPost & { contentHtml: string } = {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    tags: matterResult.data.tags,
    description: matterResult.data.description,
    readingTime: matterResult.data.readingTime,
    contentHtml,
  }

  return blogPostWithHtml
}

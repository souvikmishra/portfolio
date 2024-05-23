import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkBreaks from 'remark-breaks'

const poemsDirectory = path.join(process.cwd(), 'poems')

export function getPoemsData(sortDirection: 'asc' | 'desc' = 'desc') {
  const fileNames = fs.readdirSync(poemsDirectory)
  const allPoemsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(poemsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const poems: Poem = {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
    }
    return poems
  })

  return sortDirection === 'desc'
    ? allPoemsData.sort((a, b) => (a.date < b.date ? 1 : -1))
    : allPoemsData.sort((a, b) => (a.date > b.date ? 1 : -1))
}

export async function getPoemData(slug: string) {
  const fullPath = path.join(poemsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  //use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .use(remarkBreaks)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  const poemWithHtml: Poem & { contentHtml: string } = {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  }

  return poemWithHtml
}

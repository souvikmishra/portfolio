import Contact from '@sections/Contact'
import Intro from '@sections/Intro'
import Projects from '@sections/Projects'

export default function Page() {
  return (
    <main className="pb-4">
      <Intro />
      <Projects />
      <Contact />
    </main>
  )
}

import React from 'react'
import { getPoemsData } from '@utilities/poems'
import PoemPreview from '@components/PoemPreview'

function Poems() {
  const poems = getPoemsData('asc')
  return (
    <section id="projects">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {poems.map((poem) => (
          <PoemPreview {...poem} key={poem.slug} />
        ))}
      </div>
    </section>
  )
}

export default Poems

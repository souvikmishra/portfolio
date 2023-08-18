'use client'

import ProjectPreview from '../components/ProjectPreview'
import React from 'react'

export default function Projects() {
  return (
    <section
      id="projects"
      className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2"
    >
      <ProjectPreview
        name="Marlin Protocol"
        description="Web3 serverless backends"
        bgColor="#685cdd"
        imageUrl="./marlin.webp"
        href="https://www.marlin.org/"
        isDark
      />
      <ProjectPreview
        name="Sublime Finance"
        description="DeFi protocol"
        bgColor="#2c3d71"
        imageUrl="./sublime.webp"
        href="https://sublime.finance/"
        isDark
      />
      <ProjectPreview
        name="UI/UX Portfolio"
        description="Figma Prototype"
        href="https://www.figma.com/proto/LNS4BfknCabAt5Ry1wuWqy/Souvik-WebPage?page-id=0%3A1&type=design&node-id=1-2&viewport=-3077%2C-2966%2C0.52&t=axFlkwAb7VHuUusy-1&scaling=contain&starting-point-node-id=1%3A2&mode=design"
        imageUrl="./figma-mockup.webp"
        bgColor="#4e4e56"
        isDark
      />
      <ProjectPreview
        name="Other Projects"
        description="Will be adding more projects soon!"
      />
    </section>
  )
}

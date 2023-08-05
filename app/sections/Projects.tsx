'use client';

import ProjectPreview from '../components/ProjectPreview';
import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4"
    >
      <ProjectPreview
        name="Marlin Protocol"
        description="Web3 serverless backends"
        bgColor="#685cdd"
        imageUrl="./marlin.png"
        href="https://www.marlin.org/"
        dark
      />
      <ProjectPreview
        name="Sublime Finance"
        description="DeFi protocol"
        bgColor="#313442"
        imageUrl="./sublime.png"
        href="https://sublime.finance/"
        dark
      />
      <ProjectPreview
        name="UI/UX Portfolio"
        description="Figma Prototype"
        href="https://www.figma.com/proto/LNS4BfknCabAt5Ry1wuWqy/Souvik-WebPage?page-id=0%3A1&type=design&node-id=1-2&viewport=-3077%2C-2966%2C0.52&t=axFlkwAb7VHuUusy-1&scaling=contain&starting-point-node-id=1%3A2&mode=design"
        imageUrl="./figma-mockup.png"
      />
      <ProjectPreview
        name="Other Projects"
        description="Will be adding more projects soon!"
        bgColor="#4e4e56"
        dark
      />
    </section>
  );
}

import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  isDark?: boolean | undefined;
  href?: string | undefined;
}

const ProjectPreview: React.FC<Props> = ({
  name = 'Project Name',
  description = 'Project Description',
  imageUrl = './stay-tuned.png',
  bgColor = '#e4e4e7',
  isDark = false,
  href = '#',
}) => {
  return (
    <motion.div
      className="h-[30rem] rounded-3xl overflow-hidden"
      style={{ background: `${bgColor}` }}
      initial="initial"
      whileInView="animate"
      variants={PreviewAnimation}
    >
      <div
        className="w-full h-full px-10 py-6 duration-500 transition-all ease-in-out hover:scale-105 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="flex justify-between">
          <div>
            <h2
              className={`font-medium text-lg  ${isDark ? 'text-white' : ''}`}
            >
              {name}
            </h2>
            <p
              className={`text-sm  ${
                isDark ? 'text-zinc-100' : 'text-zinc-500'
              }`}
            >
              {description}
            </p>
          </div>
          <Link
            href={href}
            target={href === '#' ? '' : '_blank'}
            className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer"
          >
            <GoArrowUpRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7,
    },
  },
};

export default ProjectPreview;

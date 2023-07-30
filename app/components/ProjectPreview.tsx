import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';
import React from 'react';

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  dark?: boolean | undefined;
  href?: string | undefined;
}

const ProjectPreview: React.FC<Props> = ({
  name = 'Project Name',
  description = 'Project Description',
  imageUrl = './img_instagram.png',
  bgColor = '#e4e4e7',
  dark = false,
  href = '#',
}) => {
  return (
    <div
      className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? 'dark' : ''}`}
      style={{ background: `${bgColor}` }}
    >
      <div
        className="w-full h-full px-10 py-6 duration-500 transition-all ease-in-out hover:scale-105 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium text-lg dark:text-white">{name}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">
              {description}
            </p>
          </div>
          <Link
            href={href}
            className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer"
          >
            <GoArrowUpRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;

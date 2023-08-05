import { TfiGithub, TfiLinkedin } from 'react-icons/tfi';

import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';
import React from 'react';
import { RiTwitterFill } from 'react-icons/ri';
import SocialButton from './SocialButton';

const LINKS = {
  TWITTER: 'https://twitter.com/kivous911',
  GITHUB: 'https://github.com/souvikmishra',
  LINKEDIN: 'https://www.linkedin.com/in/souvikmishra/',
  INSTAGRAM: 'https://www.instagram.com/theavgwebdeveloper/',
  EMAIL: 'mishra.souvik911@gmail.com',
};

export default function Socials() {
  return (
    <div className="flex flex-col tablet:flex-row items-center gap-4 justify-self-end">
      <Link
        href={'mailto:mishra.souvik911@gmail.com'}
        className="hover:translate-y-[-0.25rem] focus-visible:translate-y-[-0.25rem] bg-black hover:bg-transparent hover:outline-black hover:outline-1 hover:outline focus-visible:bg-transparent text-center text-white hover:text-black focus-visible:text-black whitespace-nowrap transition-all duration-300 ease-in-out font-medium py-3 px-12 rounded-full w-full tablet:w-[185px] tablet:min-w-[185px]"
      >
        Contact Me
      </Link>
      <div className="flex justify-between items-between tablet:gap-4 w-full tablet:w-auto mt-2 tablet:mt-0">
        <SocialButton href={LINKS.INSTAGRAM} bgColor="instagram">
          <AiFillInstagram className="w-5 h-5" />
        </SocialButton>
        <SocialButton href={LINKS.GITHUB} bgColor="github">
          <TfiGithub className="w-5 h-5" />
        </SocialButton>
        <SocialButton href={LINKS.LINKEDIN} bgColor="linkedin">
          <TfiLinkedin className="w-5 h-5" />
        </SocialButton>
        <SocialButton href={LINKS.TWITTER} bgColor="twitter">
          <RiTwitterFill className="w-5 h-5" />
        </SocialButton>
      </div>
    </div>
  );
}

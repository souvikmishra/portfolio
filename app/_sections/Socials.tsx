import { TfiGithub, TfiLinkedin } from 'react-icons/tfi'

import { AiFillInstagram } from 'react-icons/ai'
import Link from 'next/link'
import React from 'react'
import { RiTwitterFill } from 'react-icons/ri'
import SocialButton from '@components/SocialButton'

const LINKS = {
  TWITTER: 'https://twitter.com/kivous911',
  GITHUB: 'https://github.com/souvikmishra',
  LINKEDIN: 'https://www.linkedin.com/in/souvikmishra/',
  INSTAGRAM: 'https://www.instagram.com/theavgwebdeveloper/',
  EMAIL: 'mailto:mishra.souvik911@gmail.com',
}

const LABELS = {
  TWITTER: 'Takes you to my Twitter profile',
  GITHUB: 'Takes you to my Github profile',
  LINKEDIN: 'Takes you to my LinkedIn profile',
  INSTAGRAM: 'Takes you to my Instagram profile',
  EMAIL: 'Contact me via email',
}

const SOCIAL_BUTTONS = [
  {
    href: LINKS.INSTAGRAM,
    ariaLabel: LABELS.INSTAGRAM,
    bgColor: 'instagram',
    icon: <AiFillInstagram className="h-5 w-5" />,
  },
  {
    href: LINKS.GITHUB,
    ariaLabel: LABELS.GITHUB,
    bgColor: 'github',
    icon: <TfiGithub className="h-5 w-5" />,
  },
  {
    href: LINKS.LINKEDIN,
    ariaLabel: LABELS.LINKEDIN,
    bgColor: 'linkedin',
    icon: <TfiLinkedin className="h-5 w-5" />,
  },
  {
    href: LINKS.TWITTER,
    ariaLabel: LABELS.TWITTER,
    bgColor: 'twitter',
    icon: <RiTwitterFill className="h-5 w-5" />,
  },
]

export default function Socials() {
  return (
    <div className="flex flex-col items-center gap-4 justify-self-end tablet:flex-row">
      <Link
        href={LINKS.EMAIL}
        aria-label={LABELS.EMAIL}
        className="w-full whitespace-nowrap rounded-full bg-black px-12 py-3 text-center font-medium text-white outline-none transition-all duration-300 ease-in-out hover:translate-y-[-0.25rem] hover:bg-transparent hover:text-black hover:outline hover:outline-black focus:translate-y-[-0.25rem] focus:bg-transparent focus:text-black focus:outline focus:outline-black tablet:w-[185px] tablet:min-w-[185px]"
      >
        Contact Me
      </Link>
      <div className="items-between mt-2 flex w-full justify-between tablet:mt-0 tablet:w-auto tablet:gap-4">
        {SOCIAL_BUTTONS.map((button) => (
          <SocialButton
            href={button.href}
            ariaLabel={button.ariaLabel}
            bgColor={button.bgColor}
            key={button.href}
          >
            {button.icon}
          </SocialButton>
        ))}
      </div>
    </div>
  )
}

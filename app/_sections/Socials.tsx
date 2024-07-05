import { TfiGithub, TfiLinkedin } from 'react-icons/tfi'
import { RiTwitterXFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
import Link from 'next/link'
import React from 'react'
import SocialButton from '@components/SocialButton'
import { LINKS, LABELS } from '../_utilities/common'

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
    icon: <RiTwitterXFill className="h-5 w-5" />,
  },
]

export default function Socials() {
  return (
    <div className="flex flex-col-reverse items-center gap-4 justify-self-end tablet:flex-row">
      <Link
        href={LINKS.EMAIL}
        aria-label={LABELS.EMAIL}
        className="w-full whitespace-nowrap rounded-full border-2 border-transparent bg-black px-12 py-2.5 text-center font-medium text-white outline-none transition-all duration-300 ease-in-out hover:translate-y-[-0.25rem] hover:border-2 hover:border-black hover:bg-transparent hover:text-black focus:translate-y-[-0.25rem] focus:bg-transparent focus:text-black focus:outline focus:outline-black tablet:w-[185px] tablet:min-w-[185px]"
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

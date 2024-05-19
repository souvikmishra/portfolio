import Link from 'next/link'
import React from 'react'

type Props = {
  href?: string | undefined
  children: React.ReactNode
  bgColor?: string | undefined
  ariaLabel?: string | undefined
}

export default function SocialButton({
  href = '#',
  ariaLabel = 'Takes you to the top of the page',
  children,
  bgColor = 'black',
}: Props) {
  let bgHoverColorClass = ''
  let bgFocusColorClass = ''
  switch (bgColor) {
    case 'instagram':
      bgFocusColorClass =
        'focus:bg-instagram focus:outline focus:outline-instagram'
      bgHoverColorClass = 'hover:bg-instagram'
      break
    case 'github':
      bgFocusColorClass = 'focus:bg-github focus:outline focus:outline-github'
      bgHoverColorClass = 'hover:bg-github'
      break
    case 'linkedin':
      bgFocusColorClass =
        'focus:bg-linkedin focus:outline focus:outline-linkedin'
      bgHoverColorClass = 'hover:bg-linkedin'
      break
    case 'twitter':
      bgFocusColorClass = 'focus:bg-twitter focus:outline focus:outline-twitter'
      bgHoverColorClass = 'hover:bg-twitter'
      break
    default:
      bgFocusColorClass = 'focus:bg-black focus:outline focus:outline-black'
      bgHoverColorClass = 'hover:bg-black'
      break
  }

  return (
    <Link
      target="_blank"
      href={href}
      aria-label={ariaLabel}
      className={`group h-12 w-12 bg-white outline-none hover:translate-y-[-0.25rem] focus:translate-y-[-0.25rem] ${bgHoverColorClass} ${bgFocusColorClass} flex items-center justify-center rounded-full transition-all duration-300 ease-in-out`}
    >
      <div className="text-black transition-all duration-300 ease-in-out group-hover:text-white group-focus:text-white">
        {children}
      </div>
    </Link>
  )
}

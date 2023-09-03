import Link from 'next/link'
import React from 'react'

type Props = {
  href?: string
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
      bgFocusColorClass = 'focus-visible:bg-instagram'
      bgHoverColorClass = 'hover:bg-instagram'
      break
    case 'github':
      bgFocusColorClass = 'focus-visible:bg-github'
      bgHoverColorClass = 'hover:bg-github'
      break
    case 'linkedin':
      bgFocusColorClass = 'focus-visible:bg-linkedin'
      bgHoverColorClass = 'hover:bg-linkedin'
      break
    case 'twitter':
      bgFocusColorClass = 'focus-visible:bg-twitter'
      bgHoverColorClass = 'hover:bg-twitter'
      break
    default:
      bgFocusColorClass = 'focus-visible:bg-black'
      bgHoverColorClass = 'hover:bg-black'
      break
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group h-12 w-12 bg-white hover:translate-y-[-0.25rem] focus-visible:translate-y-[-0.25rem] ${bgHoverColorClass} ${bgFocusColorClass} flex items-center justify-center rounded-full transition-all duration-300 ease-in-out`}
    >
      <div className="text-black transition-all duration-300 ease-in-out group-hover:text-white group-focus-visible:text-white">
        {children}
      </div>
    </Link>
  )
}

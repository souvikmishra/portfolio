import Link from 'next/link'
import React from 'react'
import cn from '../_utilities/cn'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface FooterNavButtonProps {
  href: string
  type: 'next' | 'prev'
  children: React.ReactNode
}

export default function FooterNavButton({
  href,
  type,
  children,
}: FooterNavButtonProps) {
  return (
    <Link
      className={cn(
        'group flex w-full items-center gap-1 rounded-xl border border-gray-900 px-6 py-4 no-underline transition-all duration-300 ease-out hover:bg-gray-900 hover:text-gray-100 hover:underline focus:scale-[1.02] focus:bg-gray-900 focus:text-gray-100 dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900 dark:focus:bg-gray-200 dark:focus:text-gray-900 lg:flex-row',
        {
          'col-start-1 justify-center text-left md:justify-start':
            type === 'prev',
          'col-start-2 justify-center text-right md:justify-end':
            type === 'next',
        },
      )}
      href={href}
    >
      {type === 'prev' && (
        <IoIosArrowBack className="duration-300 ease-out group-hover:-translate-x-1" />
      )}
      {children}
      {type === 'next' && (
        <IoIosArrowForward className="duration-300 ease-out group-hover:translate-x-1" />
      )}
    </Link>
  )
}

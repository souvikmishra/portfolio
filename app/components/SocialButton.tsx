import { IconType } from 'react-icons';
import Link from 'next/link';
import React from 'react';

type Props = {
  href?: string;
  children: React.ReactNode;
  bgColor?: string | undefined;
};

export default function SocialButton({
  href = '#',
  children,
  bgColor = 'black',
}: Props) {
  let bgHoverColorClass = '';
  let bgFocusColorClass = '';
  switch (bgColor) {
    case 'instagram':
      bgFocusColorClass = 'focus-visible:bg-instagram';
      bgHoverColorClass = 'hover:bg-instagram';
      break;
    case 'github':
      bgFocusColorClass = 'focus-visible:bg-github';
      bgHoverColorClass = 'hover:bg-github';
      break;
    case 'linkedin':
      bgFocusColorClass = 'focus-visible:bg-linkedin';
      bgHoverColorClass = 'hover:bg-linkedin';
      break;
    case 'twitter':
      bgFocusColorClass = 'focus-visible:bg-twitter';
      bgHoverColorClass = 'hover:bg-twitter';
      break;
    default:
      bgFocusColorClass = 'focus-visible:bg-black';
      bgHoverColorClass = 'hover:bg-black';
      break;
  }

  return (
    <Link
      href={href}
      className={`group hover:translate-y-[-0.25rem] focus-visible:translate-y-[-0.25rem] h-12 w-12 bg-white ${bgHoverColorClass} ${bgFocusColorClass} rounded-full transition-all duration-300 ease-in-out flex justify-center items-center`}
    >
      <div className="text-black group-hover:text-white group-focus-visible:text-white transition-all duration-300 ease-in-out">
        {children}
      </div>
    </Link>
  );
}

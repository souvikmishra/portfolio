import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between py-4 px-2">
      <div className="flex gap-[1ch] items-center">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="text-sm font-semibold tracking-widest">
          AVGWEB.DEV
        </span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link href={'#'} className="text-black font-medium">
          Home
        </Link>
        <Link href={'#'}>Projects</Link>
        <Link href={'#'}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;

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
      <div className="flex md:gap-12 gap-4 md:text-md text-sm text-zinc-400">
        <Link href={'#'} className="text-black font-medium">
          Home
        </Link>
        <a href={'#projects'}>Projects</a>
        <a href={'#contact'}>Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;

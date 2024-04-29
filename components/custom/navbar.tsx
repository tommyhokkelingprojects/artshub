"use client";

import React, { useEffect, useState } from 'react';
import SearchBar from './searchbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import MitoLogo from '@/lib/mito.svg';

const Navbar: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const pathname = usePathname()
  
  // TBD: Fetched from with directory structure
  const linkNames = ['arts', 'HAIO', 'Migrant', 'POH', 'SEH', 'SO'];


  return (
    <nav className='pl-[24px] pr-[24px] border-b'>   
      <div className="w-full flex h-min-[48px]">
      <svg width="48" height="48" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-[8px] transform">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M400 800C620.914 800 800 620.914 800 400C800 179.086 620.914 0 400 0C179.086 0 0 179.086 0 400C0 620.914 179.086 800 400 800ZM524 400C524 491.097 474.282 570.581 400.5 612.799C326.718 570.581 277 491.097 277 400C277 308.903 326.718 229.419 400.5 187.201C474.282 229.419 524 308.903 524 400ZM522 155C477.787 155 436.309 166.711 400.5 187.201C364.691 166.711 323.213 155 279 155C143.69 155 34 264.69 34 400C34 535.31 143.69 645 279 645C323.213 645 364.691 633.289 400.5 612.799C436.309 633.289 477.787 645 522 645C657.31 645 767 535.31 767 400C767 264.69 657.31 155 522 155Z" fill="#2563eb"/>
      </svg>
        <div className='flex items-center h-[48px]'>
          <Link href="/" className='text-3xl leading-none z-10 flex-none'>Mitosis</Link>
        </div>
        <div className="justify-center pl-[20px] grow">
          <SearchBar />
        </div>
      </div>
      {/* hamburger menu if mobile see google news */}
      <div className='justify-center flex'>
        <div className=" flex h-[48px] mt-auto overflow-x-auto scrollbar-hidden">
            <ul className="flex items-end">
              {linkNames.map(name => (
                <li key={name} className="px-[12px] mx-[4px] py-[4px]">
                  <Link href={`/portals/${name}`} className={pathname === `/portals/${name}` ? 
                    'text-blue-500 after:bg-blue-500 after:-mb-[4px] after:relative after:block after:h-[4px]  after:w-full after:rounded-t-lg' : ''}>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>        
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
"use client";

import React, { useEffect, useState } from 'react';
import SearchBar from './searchbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const Navbar: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const pathname = usePathname()
  
  // TBD: Fetched from with directory structure
  const linkNames = ['arts', 'HAIO', 'Migrant', 'POH', 'SEH', 'SO'];


  return (
    <nav className='pl-[24px] pr-[24px] border-b'>   
      <div className="w-full flex h-min-[48px]">
        <div className='flex items-center h-[48px]'>
          <Link href="/" className='text-3xl leading-none z-10 flex-none'>Mito</Link>
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
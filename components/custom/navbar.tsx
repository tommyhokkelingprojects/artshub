"use client";

import React, { useState } from 'react';
import SearchBar from '../ui/searchbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const Navbar: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const pathname = usePathname()


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };


  return (
    <nav className='pl-[24px] pr-[24px] border-b'>   
      <div className="w-full flex h-min-[48px]">
        <div className='flex items-center h-[48px]'>
          <Link href="/" className='text-3xl leading-none z-10 flex-none text-blue-600'>Mito</Link>
        </div>
        <div className="justify-center grow">
          <SearchBar />
        </div>
      </div>
      <div className="w-full flex h-min-[48px] pt-[12px] justify-center items-center gap-4 p-[1px]">
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/arts" className={` ${pathname === '/arts' ? 'text-blue-600 border-b-4 border-blue-600' : ''}`}>
              Arts
            </Link>
          </li>
          <li>
            <Link href="/HAIO" className={ pathname === '/HAIO' ? 'text-blue-600' : ''}>
                HAIO
            </Link>
          </li>
          <li>
            <Link href="/migrant" className={ pathname === '/migrant' ? 'text-blue-600' : ''}>
                Migrant
            </Link>
          </li>
          <li>
            <Link href="/poh" className={ pathname === '/poh' ? 'text-blue-600' : ''}>
                POH
            </Link>
          </li>
          <li>
            <Link href="/seh" className={ pathname === '/seh' ? 'text-blue-600' : ''}>
                SEH
            </Link>
          </li>
          <li>
            <Link href="/so" className={ pathname === '/so' ? 'text-blue-600' : ''}>
                SO
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
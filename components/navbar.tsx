"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SearchBar from './ui/searchbar';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <nav className="w-full flex h-min-[48px] pl-[24px] pr-[24px] justify-center">   
      <Link href="/" className='text-3xl h-[48px] z-10 flex-none items-center justify-center leading-non'>Mito</Link>
      <SearchBar />
  </nav>
  );
};

export default Navbar;
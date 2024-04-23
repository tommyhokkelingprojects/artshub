

import React, { useState } from 'react';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


const InputSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Search value:', searchValue);
  };

  return (
    <Form>  
      <div className="flex items-center bg-gray-100 px-2 w-96 h-12 rounded-full justify-between">
        <Input
          className='mx-4 pr-4 bg-transparent flex-grow'
          type="text"
          value={searchValue}
          onChange={handleInputChange}
        />
        <div className="flex">
          {searchValue ? (
            <>
            <Button 
              type="submit"
              className='flex items-center justify-center bg-transparent hover:bg-gray-200 rounded-full ml-1'
              size={'icon'}              
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="black" strokeWidth="2" height="24" width="24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </Button>
              <div className="flex items-center">
                <div className="border-l border-gray-300 h-8 mx-1"></div>
              </div>
            </>
          ) : null}
          <Button 
            type="reset"
            className='flex items-center justify-center bg-transparent hover:bg-transparent'
            size={'icon'}
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" stroke="black" strokeWidth="2" height="24" width="24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default InputSearch;
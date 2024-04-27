// Importing required modules and components
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

export default function SearchBar() {
  // Initializing state and ref
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [val, setVal] = useState("");
  const [isActive, setIsActive] = useState(false);

  // Handler for text area change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value);
  }

  // Handler for visability of text area
  const [showTextArea, setShowTextArea] = useState(false);

  // Handler for clearing the text area
  const handleClear = () => {
    setVal("");
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }

  // Handler for focus and blur events
  const handleFocus = () => {
    setIsActive(true);
  }

  const handleBlur = () => {
    setIsActive(false);
  }

  // Handler for key down events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      // Submit your search query
      console.log(val);
    }
  }

  // Effect to adjust the height of text area
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [val]);

  return (
    <div className={`flex relative z-3 mx-auto w-auto max-w-[584px] min-h-[48px] border-[1px] border-gray-500 rounded-[24px] ${isActive ? 'bg-white shadow-md' : ''}`}>
        {/* Button container */}
        <div className='w-[48px] h-[48px] flex items-center justify-center'>
          <Button className="p-[8px] h-[36px] w-[36px] bg-transparent hover:bg-gray-200 rounded-full" type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" fill='none' focusable="false" viewBox="0 0 24 24" height="24px" width="24px" stroke="black" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>    
          </Button>
        </div> 

        {/* Text area */}
        {/* Improvement hide textarea by default if screensize sm*/}
        <textarea 
          className="flex grow text-lg mt-[8px] mb-[8px] bg-transparent resize-none focus:outline-none "
          rows={1}
          style={{maxHeight: '5em', overflowY: 'auto'}}
          placeholder='Zoeken...'
          value={val} 
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          ref={textAreaRef}
          autoFocus
        ></textarea>

        {/* Clear textarea button */}
        {val && (
          <div className='absolute right-0 w-[48px] h-[48px] flex items-center justify-center'>
            <Button className="p-[8px] h-[36px] w-[36px] bg-transparent hover:bg-gray-200 rounded-full" type="reset">
              <svg onClick={handleClear} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2" height="20" width="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
              </svg>
            </Button>
          </div>
        )}
      </div>
  );
}
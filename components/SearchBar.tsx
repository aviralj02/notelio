import React from 'react';
import Search from '../public/assets/search-btn.png';

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className="flex justify-center max-w-3xl mx-auto">
      <div className="relative mt-14 w-full mx-1">
        <div className="absolute left-0 inset-y-0 flex items-center pl-5 pointer-events-none">
          <img src={Search.src} alt="search" className="w-[14px] h-[14px]" />
        </div>
        <input
          type="search"
          placeholder="Search Notes..."
          className="w-full py-3 pl-12 pr-2 outline-none rounded-md bg-[#1f1f1f] text-[#fff] placeholder:text-[#7b7b7b] text-lg border border-opacity-0 border-gray-500 focus:border-gray-500 focus:border-opacity-100 focus:border focus:ring-0 transition-all"
        />
      </div>
    </div>
  );
}

export default SearchBar;
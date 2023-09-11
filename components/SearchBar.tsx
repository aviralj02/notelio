import React, { ChangeEvent } from 'react';
import SearchIcon from '../public/assets/search-btn.png';

type Props = {
  search: string;
  setSearch: Function;
}

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <div className="flex justify-center max-w-3xl mx-auto">
      <div className="relative mt-10 w-full mx-1">
        <div className="absolute left-0 inset-y-0 flex items-center pl-5 pointer-events-none">
          <img src={SearchIcon.src} alt="search" className="w-[14px] h-[14px]" />
        </div>
        <input
          type="search"
          placeholder="Search Notes..."
          className="w-full py-3 pl-12 pr-2 outline-none rounded-md bg-[#1f1f1f] text-[#fff] placeholder:text-[#7b7b7b] text-lg border border-opacity-0 border-gray-500 focus:border-gray-500 focus:border-opacity-100 focus:border focus:ring-0 transition-all"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
    </div>
  );
}

export default SearchBar;
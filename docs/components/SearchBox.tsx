import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchBox: React.FC = () => (
  <div className="h-10 m-4">
    <button type="button" className="w-full h-full px-3 flex items-center border dark:border-gray-800 rounded-lg">
      <SearchIcon className="w-5" />
      <span className="ml-3 text-sm">Search</span>
      <div className="ml-auto">
        <kbd
          className="h-5 w-5 ml-1 inline-flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded text-xs">⌘</kbd>
        <kbd
          className="h-5 w-5 ml-1 inline-flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded text-xs">K</kbd>
      </div>
    </button>
  </div>
)

export default SearchBox;

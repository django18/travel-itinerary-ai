import React, { useState, useCallback, forwardRef } from "react";
import debounce from "lodash/debounce";
import { uniqueId } from "lodash";

const SearchInput = forwardRef(
  (
    {
      label,
      placeholder,
      onSearch,
      debounceEnabled = false,
      debounceDelay = 500,
    },
    ref
  ) => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const clearResponse = () => setQuery("");

    const debouncedSearch = useCallback(
      debounce((value) => {
        if (debounceEnabled && value.length > 0) {
          const result = onSearch(value);
          setSearchResults(result);
        } else {
          setSearchResults(null);
        }
      }, debounceDelay),
      [debounceEnabled, debounceDelay, onSearch]
    );

    const handleChange = (e) => {
      const inputValue = e.target.value;
      setQuery(inputValue);
      if (debounceEnabled) {
        // Call debounced search function
        debouncedSearch(inputValue);
      }
    };

    const selectSearchResult = (item) => {
      setQuery(`${item.name}, ${item.country}`); // Update input value with selected item
      setSearchResults(null); // Hide search results container
    };

    return (
      <div className="flex flex-col w-full z-100">
        {label && (
          <label htmlFor="travel-destination" className="text-sm font-medium">
            {label}
          </label>
        )}
        {/* <label for="prompt">Provide Additional Details</label> */}
        <div className="relative">
          <input
            type="text"
            name="prompt"
            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
            placeholder={placeholder}
            required
            value={query}
            onChange={handleChange}
            ref={ref}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full  text-gray-300 hover:text-gray-700 focus:outline-none"
            aria-label="Clear"
            onClick={clearResponse}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {debounceEnabled && searchResults && (
            <div className="absolute mt-0.5 top-full left-0 w-full shadow-lg z-50 bg-gray-100 rounded-md">
              {searchResults.map((item) => (
                <p
                  key={uniqueId(item.name + item.country)}
                  className="p-2 cursor-pointer hover:bg-gray-600 hover:text-gray-50"
                  onClick={() => selectSearchResult(item)}
                >
                  {item.name},{item.country}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default SearchInput;

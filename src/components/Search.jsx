import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import classNames from "classnames";
import Button from "./Button";

const SearchInput = ({
  onSearch,
  debounceEnabled = false,
  debounceDelay = 500,
  isLoading = false,
}) => {
  const [query, setQuery] = useState("");
  const loaderClasses = classNames("size-6", isLoading && "animate-spin");

  const clearResponse = () => setQuery("");

  const debouncedSearch = useCallback(
    debounce((value) => {
      if (debounceEnabled) {
        onSearch(value);
      }
    }, debounceDelay),
    [debounceEnabled, debounceDelay, onSearch]
  );

  useEffect(() => {
    if (debounceEnabled) {
      debouncedSearch(query);
    }
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch, debounceEnabled]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!debounceEnabled) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 p-6 flex self-center flex-col gap-6 items-center justify-center w-2/3"
    >
      <div className="flex gap-6 justify-stretch w-full">
        <div className="flex flex-col flex-1 flex-1">
          <label htmlFor="travel-days" className="text-sm font-medium ">
            Destination
          </label>
          <select
            id="travel-days"
            className="mt-1 p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:outline-none "
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="select2" className="text-sm font-medium ">
            Travel days
          </label>
          <select
            id="select2"
            className="mt-1 p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:outline-none "
          >
            <option value="1">1 day</option>
            <option value="2">2 days</option>
            <option value="3">3 days</option>
            <option value="4">4 days</option>
            <option value="5">5 days</option>
            <option value="6">6 days</option>
            <option value="7">7 days</option>
            <option value="8">8 days</option>
            <option value="9">9 days</option>
            <option value="10">10 days</option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="select3" className="text-sm font-medium ">
            Travel type
          </label>
          <select
            id="select3"
            className="mt-1 p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:outline-none"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      <div class="flex flex-col w-full">
        <label for="prompt">Provide Additional Details</label>
        <div className="relative">
          <input
            type="text"
            name="prompt"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Where do you want to go?"
            required
            value={query}
            onChange={handleChange}
          />
          <button
            type="button"
            class="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
            aria-label="Clear"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex gap-6">
        <Button type="submit">
          Generate Itinerary
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </form>
  );
};

export default SearchInput;

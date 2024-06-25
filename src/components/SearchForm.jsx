import React, { useState, useEffect, useCallback, useRef } from "react";
import debounce from "lodash/debounce";
import classNames from "classnames";
import Button from "./Button";
import Search from "./Search";
import { searchCities } from "../utils/search";
import { TRAVEl_DAYS, TRAVEL_TYPE } from "../utils/constants";

const SearchForm = ({
  onSearch,
  debounceEnabled = false,
  debounceDelay = 500,
  isLoading = false,
}) => {
  const extraInfoRef = useRef(null);
  const travelDestinationRef = useRef(null);
  const [travelDays, setTravelDays] = useState("3");
  const [travelType, setTravelType] = useState("relaxation");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(travelDestinationRef.current.value, extraInfoRef.current.value);
    const travelDestination = travelDestinationRef.current.value;
    const extraDetails = extraInfoRef.current.value;

    if (!debounceEnabled) {
      onSearch({
        travelDays,
        travelType,
        extraDetails,
        travelDestination,
      });
    }
  };

  const searchPlace = () => {
    const result = searchCities();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 p-6 flex self-center flex-col gap-6 items-center justify-center w-full shadow-sm rounded-lg  text-slate-800"
    >
      <div className="flex flex-col gap-6 justify-stretch w-full flex-wrap md:flex-row">
        <div className="flex flex-col flex-1">
          <Search
            ref={travelDestinationRef}
            debounceEnabled
            label="Destination"
            onSearch={searchCities}
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="travel-days" className="font-medium text-sm">
            Travel days
          </label>
          <select
            id="travel-days"
            className="mt-1 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none"
            onChange={(e) => setTravelDays(e.target.value)}
            value={travelDays}
          >
            {TRAVEl_DAYS.map((day) => (
              <option key={day.text} value={day.value}>
                {day.text}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="travel-type" className="text-sm font-medium ">
            Travel type
          </label>
          <select
            id="travel-type"
            className="mt-1 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none"
            onChange={(e) => setTravelType(e.target.value)}
            value={travelType}
          >
            {TRAVEL_TYPE.map((type) => (
              <option key={type.value} value={type.value}>
                {type.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Search
        ref={extraInfoRef}
        label="Additional details"
        placeholder="Specific interests, Preferred activities, Dietary restrictions or Budget considerations"
      />
      <div className="flex gap-6">
        <Button type="submit" isLoading={isLoading}>
          Generate Itinerary
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;

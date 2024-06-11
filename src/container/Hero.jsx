import React, { useEffect, useState } from "react";
import classNames from "classnames";
import TextGenerate from "../components/TextGenerate";
import SpinnerImage from "../assets/infinite-spinner.png";
import ItineraryImage from "../assets/itinerary.png";
import Header from "../components/Header";
import { postRequest } from "../utils/api-service";
import SearchInput from "../components/Search";

const Hero = () => {
  const [geminiResponse, setGeminiResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const formatResponse = (textArray) => {
    return textArray.map((s) => {
      if (s.trim().startsWith("#")) {
        return {
          textNodeType: "main-heading",
          text: s.trim().replace(/##/, ""),
        };
      } else if (s.trim().startsWith("**")) {
        return {
          textNodeType: "section-heading",
          text: s.trim().replace(/\*/g, ""),
        };
      } else if (s.trim().startsWith("* ")) {
        console.log(s);
        const regex = /\*\w+\*/g;
        const matches = s.match(regex);
        return {
          textNodeType: "section-line",
          text: s.trim().replace(/\*/g, ""),
          lineHeading: matches?.[0],
        };
      } else {
        return {
          textNodeType: "simple",
          text: s.trim(),
        };
      }
    });
  };

  const handleSearch = async (query) => {
    console.log("Searching for:", query);
    setGeminiResponse([]);
    setIsLoading(true);
    const result = await postRequest("prompt", {
      prompt: query,
    });
    setGeminiResponse(formatResponse(result.split("\n")));
    setIsLoading(false);
  };

  // const sendRequest = async () => {
  //   setGeminiResponse([]);
  //   setIsLoading(true);
  //   const res = await fetch("http://localhost:3000/prompt", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       prompt: searchText,
  //     }),
  //   });

  //   const response = await res.json();
  //   setGeminiResponse(formatResponse(response.result.split("\n")));
  //   setIsLoading(false);
  // };

  return (
    <section className="flex flex-col">
      <Header />
      <SearchInput onSearch={handleSearch} isLoading />
      {/* <div className="flex flex-col h-1/3 justify-center items-center p-12 bg-gradient-to-r from-teal-900 to-teal-600">
        <h1 className="text-6xl font-bold tracking-tight text-gray-200 sm:text-6xl">
          Travel AI
        </h1>
        <div class="text-center">
          <h1 class="text-4xl text-gray-100 sm:text-6xl">
            Build your itinerary
          </h1>
          <section class="mt-6 text-lg leading-8 text-white">
            Tired of Planning Trips? Take the Stress Out of Travel with Our
            Itinerary Planner!
          </section>
          <div class="mt-10 flex items-center justify-center gap-x-6 w-full">
            <form
              onSubmit={(e) => e.preventDefault()}
              class="flex items-stretch w-full"
            >
              <label for="prompt-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                  placeholder="Where do you want to go?"
                  required
                  onChange={(e) => setSearcText(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <button
                class="p-2.5 ms-2 text-sm font-small text-white bg-gray-700 rounded-lg  hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={sendRequest}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={loaderClasses}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
              <button
                class="p-2.5 ms-2 flex shrink-0 text-sm font-small text-white bg-gray-700 rounded-lg  hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={clearResponse}
              >
                <span>Start fresh</span>
                <span class="sr-only">Search</span>
              </button>
            </form>
          </div>
        </div>
      </div> */}
      <div className="p-8 flex items-center justify-center w-full  ">
        {!isLoading && geminiResponse.length === 0 && (
          <div className="flex flex-col items-center">
            <img src={ItineraryImage} />
            <div>Enter a prompt to generate you travel itinerary</div>
          </div>
        )}
        {geminiResponse.length > 0 && (
          <TextGenerate wordsArray={geminiResponse} />
        )}
        {isLoading && (
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal-800"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

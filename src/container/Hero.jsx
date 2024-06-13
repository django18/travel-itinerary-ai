import React, { useEffect, useState } from "react";
import classNames from "classnames";
import TextGenerate from "../components/TextGenerate";
import SpinnerImage from "../assets/infinite-spinner.png";
import ItineraryImage from "../assets/itinerary.png";
import Header from "../components/Header";
import { postRequest } from "../utils/api-service";
import SearchInput from "../components/Search";
import SearchForm from "../components/SearchForm";
import RecentItineraries from "./RecentItineraries";
import Itinerary from "./Itinerary";

const Hero = () => {
  const [geminiResponse, setGeminiResponse] = useState(null);
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

  const handleSearch = async ({
    travelDays,
    travelType,
    extraDetails,
    travelDestination,
  }) => {
    console.log("Searching for:", {
      travelDays,
      travelType,
      extraDetails,
      travelDestination,
    });
    // setGeminiResponse(null);
    setIsLoading(true);
    try {
      const response = await postRequest("prompt", {
        travelDays,
        travelType,
        extraDetails,
        travelDestination,
      });
      const finalResponse = JSON.parse(response);
      setGeminiResponse(finalResponse);
      // setGeminiResponse(formatResponse(result.split("\n")));
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
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
      <SearchForm onSearch={handleSearch} isLoading={isLoading} />
      {geminiResponse && <Itinerary itinerary={geminiResponse} />}
      <div className="p-8 flex items-center justify-center w-full  ">
        {/* {!isLoading && geminiResponse.length === 0 && (
          <div className="flex flex-col items-center">
            <img src={ItineraryImage} />
            <div>Enter a prompt to generate you travel itinerary</div>
          </div>
        )} */}
        {/* {geminiResponse.length > 0 && (
          <TextGenerate wordsArray={geminiResponse} />
        )} */}
        {/* {isLoading && (
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal-800"></div>
          </div>
        )} */}
      </div>
      <RecentItineraries />
    </section>
  );
};

export default Hero;

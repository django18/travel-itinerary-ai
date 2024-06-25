import React, { useState } from "react";
import Header from "../components/Header";
import { postRequest } from "../utils/api-service";
import SearchForm from "../components/SearchForm";
import RecentItineraries from "./RecentItineraries";
import Itinerary from "./Itinerary";

const Hero = () => {
  const [geminiResponse, setGeminiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async ({
    travelDays,
    travelType,
    extraDetails,
    travelDestination,
  }) => {
    setGeminiResponse(null);
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
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:w-2/3 m-auto">
      <Header />
      <SearchForm onSearch={handleSearch} isLoading={isLoading} />
      {geminiResponse && <Itinerary itinerary={geminiResponse} />}
      <RecentItineraries />
    </section>
  );
};

export default Hero;

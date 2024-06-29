import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { postRequest } from "../utils/api-service";
import SearchForm from "../components/SearchForm";
import RecentItineraries from "./RecentItineraries";
import Itinerary from "./Itinerary";
import usePolling from "../hooks/usePolling";

const serverUrl = import.meta.env.VITE_SERVER_URL_PROD;

const Hero = () => {
  const [geminiResponse, setGeminiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { startPolling, isPolling, data, loading } = usePolling(
    serverUrl + "itinerary"
  );

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
      const { _id } = response;
      startPolling(_id);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isPolling && data) {
      const isError = data.isError;

      if (isError) {
        setGeminiResponse({ isError: true });
      } else {
        const parsedData = JSON.parse(data.data);
        setGeminiResponse({ isSuccess: true, data: parsedData });
      }
    }
  }, [isPolling]);

  return (
    <section className="flex flex-col md:w-2/3 m-auto">
      <Header />
      <SearchForm onSearch={handleSearch} isLoading={isLoading || loading} />
      {geminiResponse && geminiResponse.isError && (
        <p>Sorry we could not generate your itinerary</p>
      )}
      {geminiResponse && geminiResponse.isSuccess && (
        <Itinerary itinerary={geminiResponse.data} />
      )}
      <RecentItineraries />
    </section>
  );
};

export default Hero;

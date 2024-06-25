import React from "react";
import Card from "../components/Card";
import { ITINERARY_DATA } from "../utils/constants";
import { uniqueId } from "lodash";

const RecentItineraries = () => {
  return (
    <section className="text-center flex flex-col items-center m-auto">
      <header>
        <h2 className="text-2xl text-gray-900 m-4">
          Recently Generated Itineraries
        </h2>
      </header>
      <main className="flex justify-center gap-10 m-2 flex-wrap w-2/3">
        {ITINERARY_DATA.map((itinerary) => (
          <Card
            key={uniqueId(itinerary.cardTitle)}
            cardImg={itinerary.cardImg}
            cardTitle={itinerary.cardTitle}
            cardDescription={itinerary.cardDescription}
            cardAlt={itinerary.cardAlt}
            cardLink={itinerary.cardLink}
          />
        ))}
      </main>
    </section>
  );
};

export default RecentItineraries;

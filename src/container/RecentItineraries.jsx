import React from "react";
import Card from "../components/Card";

const itineraryDummyData = [
  {
    cardImg:
      "https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardTitle: "Itinerary for Jaipur",
    cardDescription:
      "Discover the pink city of Jaipur with this comprehensive itinerary. From the grandeur of the Amber Fort to the bustling markets of Johari Bazaar, experience the best of Jaipur in a few days.",
    cardLink: "#",
    cardAlt: "Jaipur Itinerary",
  },
  {
    cardImg:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=3520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardTitle: "Itinerary for Paris",
    cardDescription:
      "Explore the city of lights, Paris. Visit the iconic Eiffel Tower, stroll along the Champs-Élysées, and immerse yourself in art at the Louvre. This itinerary ensures you don't miss any of the highlights.",
    cardLink: "#",
    cardAlt: "Paris Itinerary",
  },
  {
    cardImg: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    cardTitle: "Itinerary for Tokyo",
    cardDescription:
      "Experience the vibrant city of Tokyo. From the traditional Senso-ji Temple to the bustling Shibuya Crossing, discover the perfect blend of tradition and modernity in this itinerary.",
    cardLink: "#",
    cardAlt: "Tokyo Itinerary",
  },
  {
    cardImg: "https://images.unsplash.com/photo-1519638399535-1b036603ac77",
    cardTitle: "Itinerary for New York",
    cardDescription:
      "Dive into the heart of New York City. Visit the Statue of Liberty, take a walk through Central Park, and enjoy a Broadway show. This itinerary covers all the must-see attractions of the Big Apple.",
    cardLink: "#",
    cardAlt: "New York Itinerary",
  },
  {
    cardImg:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=3496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardTitle: "Itinerary for Rome",
    cardDescription:
      "Explore the ancient city of Rome. From the Colosseum to the Vatican, delve into the rich history and culture of Italy's capital city with this detailed itinerary.",
    cardLink: "#",
    cardAlt: "Rome Itinerary",
  },
];

const RecentItineraries = () => {
  return (
    <section className="text-center flex flex-col items-center m-auto">
      <header>
        <h2 className="text-2xl text-gray-900">
          Recently Generated Itineraries
        </h2>
      </header>
      <main className="flex justify-center  gap-6 p-6 w-full flex-wrap">
        {itineraryDummyData.map((itinerary) => (
          <Card
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

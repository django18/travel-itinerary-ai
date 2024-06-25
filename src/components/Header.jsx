import React from "react";
import HeaderImg from "../assets/header-travel.svg";

const Header = () => {
  return (
    <section className="flex flex-col items-center p-8">
      <h1 className="flex flex-col items-center gap-4 text-6xl font-bold tracking-tight text-gray-700 sm:text-6xl">
        <img src={HeaderImg} className="w-32 h-32" />
        <span>Travel AI</span>
      </h1>
      <h2 className="text-4xl text-gray-700 sm:text-6xl">
        Build your itinerary
      </h2>
      <div className="mt-6 text-2xl leading-8 text-gray-900 w-1/2 text-center">
        Tired of Planning Trips? Take the Stress Out of Travel with Our
        Itinerary Planner!
      </div>
    </section>
  );
};

export default Header;

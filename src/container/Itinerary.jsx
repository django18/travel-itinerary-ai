import React from "react";

const Itinerary = ({ itinerary }) => {
  console.log({ itinerary });

  if (!itinerary) return;
  // Mock data for joke and trivia
  const joke =
    itinerary?.joke ??
    "Why don't scientists trust atoms? Because they make up everything!";
  const trivia =
    itinerary?.trivia ??
    "Did you know? Kyoto served as Japan's capital and the emperor's residence from 794 until 1868.";

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {itinerary.map((day, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Day {day.day}</h2>

          {/* Activities */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Activities</h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {day.activities.map((activity, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">
                      {activity.name}
                    </h4>
                    <p className="text-gray-700">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Meals */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Meals</h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={day.meals.breakfast.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2">Breakfast</h4>
                  <p className="text-gray-700">{day.meals.breakfast.name}</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={day.meals.lunch.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2">Lunch</h4>
                  <p className="text-gray-700">{day.meals.lunch.name}</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={day.meals.dinner.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2">Dinner</h4>
                  <p className="text-gray-700">{day.meals.dinner.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Joke */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Joke</h3>
        <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
          <p className="text-gray-700">{joke}</p>
        </div>
      </div>

      {/* Trivia */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Trivia</h3>
        <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
          <p className="text-gray-700">{trivia}</p>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;

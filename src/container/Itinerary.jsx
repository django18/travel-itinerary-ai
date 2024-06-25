import React, { useState } from "react";
import Error from "../components/Error";
import Modal from "../components/Modal";

const Itinerary = ({ itinerary }) => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState(false);

  const onClose = () => {
    setModalIsOpen(false);
  };

  const onImageClick = (imgUrl) => {
    setModalImg(imgUrl);
    setModalIsOpen(true);
  };

  if (!itinerary) <Error />;

  return (
    <section className="w-full shadow-lg rounded-2xl mb-10 bg-slate-50">
      <Modal isOpen={isModalOpen} imageUrl={modalImg} onClose={onClose} />
      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col mt-10">
        <img
          className="w-full h-64 object-cove mb-4 rounded-xl shadow-md"
          src={itinerary.cover}
        />
        <h1 className="text-3xl font-bold mb-4 ">{itinerary.title}</h1>
        <h2 className="text-2xl  mb-4">{itinerary.description}</h2>

        {itinerary.days.map((day, index) => (
          <div key={index} className="flex flex-col mb-8">
            <h2 className="text-2xl font-bold mb-4">{day.day}</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              {day.activities.map((activity, idx) => (
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className="flex items-stretch gap-4 justify-between">
                    <div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {activity.name}
                      </time>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {activity.description}
                      </p>
                    </div>
                    {activity.image && (
                      <a
                        onClick={() => onImageClick(activity.image)}
                        className=" cursor-pointer"
                      >
                        <img
                          src={activity.image}
                          className="w-36 h-36 min-w-36 object-cover rounded-lg"
                        />
                      </a>
                    )}
                    {!activity.image && <div className="w-48"></div>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}

        {itinerary.foodRecommendations && (
          <div className="flex flex-col mb-8">
            <h2 className="text-2xl font-bold mb-4">Food Recommendations</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              {itinerary.foodRecommendations.map((food, idx) => (
                <li className="mb-10 ms-4" key={food.name + idx}>
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {food.name}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {food.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {itinerary.transportation && (
          <div className="flex flex-col mb-8">
            <h2 className="text-2xl font-bold mb-4">Transportation</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              {itinerary.transportation.map((transport, idx) => (
                <li className="mb-10 ms-4" key={transport.name + idx}>
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {transport.name}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {transport.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {itinerary.additionalTips && (
          <div className="flex flex-col mb-8">
            <h2 className="text-2xl font-bold mb-4">Additional Tips</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              {itinerary.additionalTips.map((tip, idx) => (
                <li className="mb-10 ms-4" key={tip.name + idx}>
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {tip.name}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {tip.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

export default Itinerary;

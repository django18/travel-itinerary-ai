import React from "react";
import RightArrow from "../assets/right-arrow.svg";

const Card = ({
  cardImg,
  cardTitle,
  cardDescription,
  cardLink,
  cardImgAlt,
}) => {
  return (
    <div className=" bg-white rounded-lg shadow-lg cursor-pointer">
      <div href={cardLink} className="h-48 w-full overflow-hidden">
        <img
          className="rounded-t-lg object-cover h-full w-full"
          src={cardImg}
          alt={cardImgAlt}
          width="20rem"
        />
      </div>
      <div className="px-6 py-4">
        <a href={cardLink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
            {cardTitle}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700  text-pretty text-ellipsis">
          {cardDescription}
        </p>
        {/* <a
          href={cardLink}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <img src={RightArrow} />
        </a> */}
      </div>
    </div>
  );
};

export default Card;

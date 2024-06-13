import classNames from "classnames";
import React from "react";

// Write a wrapper button function which accepts props and then  build a particular variant
const Button = ({
  children,
  variant = "primary",
  type = "button",
  isLoading,
}) => {
  console.log("Button", isLoading);
  const buttonClasses = classNames(
    "p-2.5 ms-2 text-md rounded-sm focus:outline-none min-w-48",
    [variant === "primary" && "text-white bg-gray-700 hover:bg-gray-600"]
  );
  return (
    <button type={type} className={buttonClasses}>
      {isLoading && (
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-8 w-8 mr-2 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a5 5 0 0 1 5 5c0 4-5 10-5 10s-5-6-5-10a5 5 0 0 1 5-5z" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="inline-block text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
            Planning for you only{" "}
            <span role="img" aria-label="Heart">
              ❤️
            </span>
          </span>
        </div>
      )}
      {!isLoading && children}
    </button>
  );
};

export default Button;

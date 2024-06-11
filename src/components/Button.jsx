import classNames from "classnames";
import React from "react";

const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
}) => {
  const buttonClasses = classNames(
    "p-2.5 ms-2 text-md rounded-sm focus:outline-none min-w-48",
    [variant === "primary" && "text-white bg-gray-700 hover:bg-gray-600"]
  );
  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

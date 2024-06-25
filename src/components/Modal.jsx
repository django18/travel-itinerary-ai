import React from "react";

const Modal = ({ imageUrl, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative h-1/2 w-1/2 rounded-lg overflow-hidden shadow-xl max-w-2xl">
        <button
          className="absolute top-4 right-4 text-4xl text-white hover:text-gray-200 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={imageUrl}
          alt="Modal Content"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Modal;

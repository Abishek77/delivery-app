import React from "react";

const Card = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="mb-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{content}</p>
      </div>
      <div className="flex justify-end space-x-2">
        <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
          Accept
        </button>
        <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
          Reject
        </button>
      </div>
    </div>
  );
};

export default Card;

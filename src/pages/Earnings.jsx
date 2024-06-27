import React from "react";

const Earnings = () => {
  return (
    <main className="flex-1 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-lg font-bold mb-2">Total Rides:</h2>
          <p className="mb-2">Total Earnings:</p>
          <p className="mb-2">Name:</p>
          <p>Address:</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Total product amount:</h2>
          <button className="bg-blue-500 text-white p-2 rounded mb-2 w-full">Pay via gpay</button>
          <button className="bg-blue-500 text-white p-2 rounded w-full">pay via phonepay</button>
        </div>
      </main>
  );
};

export default Earnings;

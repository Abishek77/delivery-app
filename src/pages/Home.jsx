import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
      <div className="text-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="profile"
            className="w-16 h-16 rounded-full mx-auto"
          />
          <h2 className="text-xl font-semibold">MinitGo</h2>
          <p className="text-gray-500">minitGo@gmail.com</p>
          <div className="flex justify-center mt-2">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.556-.955L10 0l2.956 5.955 6.556.955-4.756 4.635L15.878 18z" />
            </svg>
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.556-.955L10 0l2.956 5.955 6.556.955-4.756 4.635L15.878 18z" />
            </svg>
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.556-.955L10 0l2.956 5.955 6.556.955-4.756 4.635L15.878 18z" />
            </svg>
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.556-.955L10 0l2.956 5.955 6.556.955-4.756 4.635L15.878 18z" />
            </svg>
            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.556-.955L10 0l2.956 5.955 6.556.955-4.756 4.635L15.878 18z" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">20</div>
            <div className="text-gray-600">Completed Deliveries</div>
          </div>
          <div className="bg-red-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">100</div>
            <div className="text-gray-600">Pending Deliveries</div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">50</div>
            <div className="text-gray-600">Total Collected</div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">26</div>
            <div className="text-gray-600">Total Earnings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

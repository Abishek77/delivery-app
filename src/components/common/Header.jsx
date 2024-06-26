import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-between items-center px-3">
          <button className="text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className="text-lg font-semibold">Dashboard</div>
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-success shadow-md py-4">
        <div className="w-full max-w-md mx-auto">
          <div className="flex justify-between items-center px-3">
            <button className="text-gray-500" onClick={toggleSidebar}>
              <svg
                className="w-6 h-6 text-light"
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
            <div className="text-lg font-semibold text-light">minitgo</div>
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

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Menu</h2>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7m-9 9v8m-4-4h8"
                  ></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A4 4 0 0112 21a4 4 0 016.879-3.196M12 12a4 4 0 100-8 4 4 0 000 8z"
                  ></path>
                </svg>
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m2 8h-8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Dashboard
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Header;

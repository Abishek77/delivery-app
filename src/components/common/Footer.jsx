import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [activeButton, setActiveButton] = useState('dashboard');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <footer className='fixed-bottom'>
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md">
      <div className="flex justify-around py-2">
        <Link
        to={"/dashboard"}
          className={`flex flex-col items-center no-underline ${activeButton === 'dashboard' ? 'text-orange-500' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('dashboard')}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard">
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>
          <span className="text-sm">Dashboard</span>
        </Link>
        <Link
        to={"/deliveries"}
          className={`flex flex-col items-center no-underline ${activeButton === 'delivery' ? 'text-orange-500' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('delivery')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck">
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
          </svg>
          <span className="text-sm">My Delivery</span>
        </Link>
        <Link
        
          className={`flex flex-col items-center no-underline ${activeButton === 'earnings' ? 'text-orange-500' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('earnings')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dollar-sign">
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 18V6" />
          </svg>
          <span className="text-sm">Earnings</span>
        </Link>
        <Link
        to={"/profile"}
          className={`flex flex-col items-center no-underline ${activeButton === 'profile' ? 'text-orange-500' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('profile')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-sm">Profile</span>
        </Link>
      </div>
    </div>
    </footer>
  );
}

export default Footer;

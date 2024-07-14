import React, { useState } from 'react';

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-lg font-bold text-white">PartyPenguin</a>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200">Events</a>
              <a href="#" className="text-white hover:text-gray-200">Cultural</a>
              <a href="#" className="text-white hover:text-gray-200">Concerts</a>
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center text-white hover:text-gray-200 focus:outline-none"
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="Profile"
                  />
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.292 7.293a1 1 0 011.415 0L10 10.586l3.293-3.293a1 1 0 111.415 1.415l-4 4a1 1 0 01-1.415 0l-4-4a1 1 0 010-1.415z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">My Profile</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">My Tickets</a>
                    <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Sign Out</a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/usersignup" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-blue-600">Events</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-blue-600">Host Event?</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-blue-600">Concerts</a>
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full flex items-center text-white hover:text-gray-200 focus:outline-none"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="Profile"
                />
                <svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.292 7.293a1 1 0 011.415 0L10 10.586l3.293-3.293a1 1 0 111.415 1.415l-4 4a1 1 0 01-1.415 0l-4-4a1 1 0 010-1.415z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">My Profile</a>
                  <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">My Tickets</a>
                  <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Sign Out</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;


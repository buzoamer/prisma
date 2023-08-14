import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
    <nav className="bg-gradient-to-t from-gray-800 to-pink-700 rounded-b-md shadow-md shadow-gray-800 text-white fixed top-0 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-2">
        <div className="relative flex h-16 gap-4 items-center">
          <Link href="#" className="text-white rounded-xl py-2 px-4 hover:bg-pink-600 hover:text-white hover:border-b-2">
            Event Manager
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/events" className="text-white rounded-xl py-2 px-4 hover:bg-pink-600 hover:text-white hover:border-b-2">
                Events
              </Link>
            </li>
          </ul>
          <button
            className="text-white rounded-xl py-2 px-4 hover:bg-pink-600 hover:text-white hover:border-b-2"
            aria-label="Toggle navigation">Menu</button>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Header;

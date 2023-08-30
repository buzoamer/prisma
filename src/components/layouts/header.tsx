import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="bg-white border-gray-200 bg-slate-800 fixed top-0 w-full rounded-sm">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 h-16">
        <Link href="#" className="block py-2 pl-4 pr-6 text-white bg-blue-700 rounded md:bg-transparent md:p-0">
          Event Manager
        </Link>
        <div className="flex items-center ml-auto space-x-6">
          <Link href="/events" className="block py-2 pl-4 pr-6 text-white rounded hover:text-blue-600 md:p-0">
            Events
          </Link>
          <button className="block py-2 pl-4 pr-6 text-white rounded hover:text-blue-600 md:p-0">
              Menu
          </button>
            <Link href="" className="block py-2 pl-4 pr-6 text-white rounded hover:text-blue-600 md:p-0">
              Contact
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;

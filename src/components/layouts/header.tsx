"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const socialMedia = {
    instagram: 'https://www.instagram.com/buzoo_a/',
    facebook: 'https://www.facebook.com/zhozay96/',
    linkedin: 'https://www.linkedin.com/in/amerbuzo/',
  };

  return (
    <nav className="border-gray-200 bg-gradient-to-b from-slate-800 to-transparent fixed top-0 w-full rounded-sm">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 h-20">
        <Link href="#" className="block py-2 pl-4 pr-6 text-white bg-blue-700 rounded md:bg-transparent md:p-0">
          Event Manager
        </Link>
        <div className="flex items-center ml-auto space-x-6">
          <Link href="/events" className="block py-2 pl-4 pr-6 text-white rounded hover:text-blue-600 md:p-0">
            Events
          </Link>
          <Link href="#" className="block py-2 pl-4 pr-6 text-white rounded hover:text-blue-600 md:p-0">
            Menu
          </Link>
          <button className="block py-2 pl-4 pr-6 text-white rounded hover:text-blue-600 md:p-0" onClick={toggleDropdown}>
            Contact
          </button>
          {isDropdownOpen && (
            <div className="absolute right-4 mt-44 bg-slate-500 rounded-md">
              <ul className="p-2">
                <li>
                  <Link
                    href={socialMedia.instagram}
                    target="_blank"
                    className="block py-2 px-2 text-blue-400 hover:bg-slate-200 hover:rounded-md hover:text-blue-700">
                    <FaInstagram className="inline-block mr-2"/> Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href={socialMedia.facebook}
                    target="_blank"
                    className="block py-2 px-2 text-blue-400 hover:bg-slate-200 hover:rounded-md hover:text-blue-700">
                    <FaFacebook className="inline-block mr-2"/> Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href={socialMedia.linkedin}
                    target="_blank"
                    className="block py-2 px-2 text-blue-400 hover:bg-slate-200 hover:rounded-md hover:text-blue-700">
                    <FaLinkedin className="inline-block mr-2"/> LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

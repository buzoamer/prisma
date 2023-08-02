import Link from 'next/link';
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="mt-24 pt-2 h-32 grid place-items-center text-center">
        <div className="relative overflow-hidden p-16 mb-12 mt-10 rounded-xl flex flex-col justify-center">
          <span className="absolute inset-0 bg-purple-600 animate-pulse" />
          <label className="pt-2 py-2 z-20 text-white text-3xl font-bold">Welcome to Event Manager</label>
          <p className="py-4 text-xl z-20 font-bold text-white">Manage and organize your events with ease!</p>
        </div>

        <div className="grid grid-rows-1 grid-flow-col gap-14 mt-16 text-center">
          <Link href="/login" className="relative px-5 py-3 overflow-hidden font-medium text-white bg-purple-600 border border-white rounded-lg shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-pink-500 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-pink-500 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-500 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-500 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-pink-500 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Login</span>
          </Link>

          <Link href="/register" className="relative px-5 py-3 overflow-hidden font-medium text-white bg-purple-600 border border-white rounded-lg shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-pink-500 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-pink-500 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-500 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-500 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-pink-500 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Register</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

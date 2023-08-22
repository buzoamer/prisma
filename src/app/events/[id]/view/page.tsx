import React from 'react';

export default function View() {
  return (
    <div className="mt-24 grid grid-cols-5 grid-rows-5 gap-4 text-center">
      <div className="col-span-5 font-bold text-2xl">Title</div>
      <div className="col-span-2 row-span-2 row-start-2 bg-gray-200 p-4">Description</div>
      <div className="col-span-5 row-span-2 col-start-1 row-start-4 bg-gray-300 p-4">Content</div>
      <div className="col-span-3 row-span-2 col-start-3 row-start-2 bg-gray-400 p-4">Image</div>
    </div>
  );
}


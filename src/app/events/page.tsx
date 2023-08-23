
import { fetchAllEvents } from '@/services/events';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';


export interface DataEvent {
  id: number;
  title: string;
  short_description: string;
  content: string;
  category: string;
  location: string;
  created_by: string;
  createdAt: string,
}

const Dashboard = async () => {
    const events = await fetchAllEvents();
  return (
    <>
      <Head>
        <title>Event Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container mx-auto">
        <div className="flex flex-row">
          <h1 className="pt-24 pb-4 text-xl text-white">Events:</h1>
        </div>

        <div className="flex flex-row">
          <div className="w-64">
            <div className="flex items-center">
              <input
                type="text"
                className="border rounded border-gray-300 px-2 h-8"
                name="query"/>
              <div>
                <Link className="bg-blue-500 hover:bg-blue-700 rounded text-white px-6 py-1 ml-2" href='#'>Search</Link>
                <Link className="bg-blue-500 hover:bg-blue-700 rounded text-white px-6 py-1 ml-2" href='/event/comments'>Comments</Link>
              </div>
            </div>
          </div>
        </div>
        <br/>
        
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/12 text-left py-2 px-4 border">No.</th>
              <th className="w-4/12 text-left py-2 px-4 border">Event title</th>
              <th className="w-4/12 text-left py-2 px-4 border">Location</th>
              <th className="w-4/12 text-left py-2 px-4 border">Category</th>
              <th className="w-4/12 text-left py-2 px-4 border">Event created</th>
              <th className="w-7/12 text-center py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              events.event?.map(event=> (
                <tr key={event.id} className="bg-zinc-300 text-gray-800">
                  <td className="py-2 px-4 border">{event.id}</td>
                  <td className="py-2 px-4 border">{event.title}</td>
                  <td className="py-2 px-4 border">{event.location}</td>
                  <td className="py-2 px-4 border">{event.category}</td>
                  <td className="py-2 px-4 border">Time</td>
                  <td className="py-2 px-4 border">
                    <div className="flex">
                      <Link className="bg-blue-400 hover:bg-blue-600 rounded text-white px-4 py-1 mr-2" href={`/events/${event.id}/edit`}>Edit</Link>
                      <Link className="bg-red-500 hover:bg-red-600 rounded text-white px-4 py-1 mr-2" href="#">Delete</Link>
                      <Link className="bg-slate-500 hover:bg-gray-800 rounded text-white px-4 py-1" href={`/events/${event.id}/view`}>Overview</Link>
                    </div>
                  </td>
                </tr>
              ))
            } 
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Dashboard;
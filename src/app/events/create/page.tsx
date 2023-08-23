"use client"
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {create} from '@/services/events'

export interface EventData {
  title: string;
  short_description: string;
  content: string;
  category: string;
  location: string;
  created_by: 1;
}

const Create = () => {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventData>();
  const onSubmit = async (data: EventData) => {
    const event = await create(data);
    if (event.status === 500) {
      return setMessage(event.message);
    }
    router.push('/events');
  };

  return (
    <>
      <Head>
        <title>Event Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="mt-28">
        <div className="container mx-auto">
          <div className="max-w-md pb-12 mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg shadow-gray-800">
              <h2 className="text-center text-black text-2xl font-bold mb-6">Create a new event</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block font-medium text-black">Title
                    <input
                      type="text"
                      placeholder="Enter post title"
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      {...register('title')}/>
                  </label>
                  <p className="text-red-500"></p>
                </div>

                <div className="mb-4">
                  <label className="block font-medium text-black">Short description
                    <textarea
                      placeholder="Describe the event"
                      rows={3}
                      className="w-full px-4 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      {...register('short_description')}/>
                  </label>
                  <p className="text-red-500"></p>
                </div>

                <div className="mb-4">
                  <label className="block font-medium text-black">Content
                    <textarea
                      placeholder="Enter post content"
                      rows={12}
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      {...register('content')}/>
                  </label>
                  <p className="text-red-500"></p>
                </div>

                <div className="mb-4">
                  <label className="block font-medium text-black">Category
                    <input
                      type="text"
                      placeholder="Enter post category"
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      {...register('category')}/>
                  </label>
                  <p className="text-red-500"></p>
                </div>

                <div className="mb-4">
                  <label className="block font-medium text-black">Location
                    <input
                      type="text"
                      placeholder="Enter post location"
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      {...register('location')}/>
                  </label>
                  <p className="text-red-500"></p>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;

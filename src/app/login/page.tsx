"use client"

import React from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

interface LoginFormData {
  email: string;
  password: string;
}
interface ApiResponse {
  status: number;
  message: string;
  // You can add other fields if necessary
}


const Login = () => {
  const [message, setMessage] = useState<string | null>('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>();
  const onSubmit = async (data: LoginFormData) => {

   const userRes = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    })
    console.log(userRes)
  };

  return (
    <>
      <Head>
        <title>Event Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="mt-20">
        <div className="container mx-auto">
          <div className="max-w-lg py-1 mx-auto">
            <div className="bg-purple-600 bg-opacity-50 p-16 m-2 rounded-lg shadow-lg shadow-pink-800">
              <h2 className="text-center text-white text-2xl font-bold mb-4">Log in form</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-white">Email</label>
                  <input
                    {...register('email')}
                    type="text"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-pink-500 text-white bg-opacity-70 border border-gray-300 rounded focus:outline-none focus:bg-pink-900 focus:border-white placeholder:text-slate-300"
                    placeholder="Enter your email"/>
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-white">Password</label>
                  <input
                    {...register('password')}
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 text-white bg-pink-500 bg-opacity-70 border border-gray-300 rounded focus:outline-none focus:bg-pink-900 focus:border-white placeholder:text-slate-300"
                    placeholder="Enter your password"/>
                </div>

                <div className="flex items-center">
                  <button
                    className="bg-pink-600 text-white text-center px-2 py-2 rounded hover:bg-pink-900">Submit</button>
                  <span className="text-white text-md px-4 text-center">
                    Not registered?
                    <Link className="text-white underline hover:text-black px-2 font-semibold" href="/register">Do it here!</Link>
                  </span>
                </div>
              </form>
              {message && <div className="mt-2 text-black font-semibold">{message}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
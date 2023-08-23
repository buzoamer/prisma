
import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import LoginForm from '@/components/ui/login';

export interface LoginFormData {
  email: string;
  password: string;
}
interface ApiResponse {
  status: number;
  message: string;
}


const Login = () => {
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
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
"use client"
import Head from 'next/head';
import userService from '@/services/users';
import { useForm, } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import corrected next/router
import Link from 'next/link';
import {hash} from 'bcrypt-ts'

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(''); // Initialize the message state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const saltRounds = 10;
      const hashedPassword = await hash(data.password, saltRounds);
      data.password = hashedPassword;

      const user = await userService.register(data);

      router.push('/login'); // Redirect to login page after successful registration
    } catch (error) {
      setMessage('An error occurred during registration.'); // Set a generic error message
    }
  };

  return (
    <>
      <Head>
        <title>Event Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex justify-center items-center pt-16">
        <div className="w-full max-w-md py-12">
          <div className="bg-white p-5 rounded-lg shadow-lg shadow-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign in form</h2>

            <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
                <label className="block mb-2 text-gray-800" htmlFor="name">Name</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                  {...register('name')}
                  placeholder="Enter your name"
                  type="text"/>
                <p className="text-red-500"></p>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-gray-800" htmlFor="email">Email</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                  {...register('email')}
                  placeholder="Enter your email"
                  type="email"/>
                <p className="text-red-500"></p>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-gray-800" htmlFor="password">Password</label>
                <input
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                    {...register('password')}
                    placeholder="Enter your password"
                    type="password"/>
                <p className="text-red-500"></p>
              </div>

              <div className="flex items-center justify mb-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white text-center px-2 py-2 rounded hover:bg-blue-600">Submit</button>
                <span className="text-dark text-sm text-center px-1">
                  Already registered?{' '}
                  <Link className="text-blue-500 hover:text-blue-800 underline" href="/login">Log in here!</Link>
                </span>
              </div>
            </form>
            {message && <div className="text-red-500">{message}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

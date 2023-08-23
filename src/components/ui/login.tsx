"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login } from '@/services/users';
import React from 'react'
import { useForm } from 'react-hook-form';
import { LoginFormData } from '@/app/login/page';
import Link from 'next/link';

export default function LoginForm() {
    const router = useRouter();
  const [message, setMessage] = useState<string | null>('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>();
  const onSubmit = async (data: LoginFormData) => {
    const res= await login(data);

    if(res.status!=200){
      console.log(data)
      setMessage(res.message)
      console.log("Invalid credentials")
    } else {
        router.push('/events')
    }

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block mb-2 text-white">Email
                    <input
                      {...register('email')}
                      autoComplete='off'
                      type="text"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 bg-pink-500 text-white bg-opacity-70 border border-gray-300 rounded focus:outline-none focus:bg-pink-900 focus:border-white placeholder:text-slate-300"
                      placeholder="Enter your email"/>
                  </label>
                </div>

                <div className="mb-4">
                  <label className="block text-white">Password
                    <input
                      {...register('password')}
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-4 py-2 text-white bg-pink-500 bg-opacity-70 border border-gray-300 rounded focus:outline-none focus:bg-pink-900 focus:border-white placeholder:text-slate-300"
                      placeholder="Enter your password"/>
                  </label>
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
  )
}

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
                  <label className="block mb-2 text-black">Email
                    <input
                      {...register('email')}
                      autoComplete='off'
                      type="text"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-slate-800"
                      placeholder="Enter your email"/>
                  </label>
                </div>

                <div className="mb-4">
                  <label className="block text-black">Password
                    <input
                      {...register('password')}
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-4 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-slate-800"
                      placeholder="Enter your password"/>
                  </label>
                </div>

                <div className="flex items-center">
                  <button
                    className="bg-slate-800 text-white text-center px-2 py-2 rounded hover:bg-blue-800">Submit</button>
                  <span className="text-black text-md text-center px-12">
                    Not registered?
                    <Link className="ml-2 text-blue-600 hover:text-blue-800 underline text-semibold" href="/register">Do it here!</Link>
                  </span>
                </div>
              </form>
  )
}

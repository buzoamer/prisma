"use client"
import React from 'react'
import {hash} from 'bcrypt-ts'
import {signUp} from '@/services/users';
import { useForm, } from 'react-hook-form';
import { RegisterFormData } from '@/app/register/page';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
    const router = useRouter();
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
    
        const user = await signUp(data);
    
          if(user.status === 200){
            router.push('/login'); // Redirect to login page after successful registration
          }
    
        } catch (error) {
          console.log(error)
        }
      };
  return (
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
  )
}

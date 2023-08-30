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
                <label className="block mb-2 text-black">Name
                  <input
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-slate-800"
                    {...register('name')}
                    autoComplete='off'
                    placeholder="Enter your name"
                    type="text"/>
                </label>
                <p className="text-red-500"></p>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-black">Email
                  <input
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-slate-800"
                    {...register('email')}
                    autoComplete='off'
                    placeholder="Enter your email"
                    type="email"/>
                </label>
                <p className="text-red-500"></p>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-black">Password
                  <input
                      className="w-full px-4 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-slate-800"
                      {...register('password')}
                      placeholder="Enter your password"
                      type="password"/>
                </label>
                <p className="text-red-500"></p>
              </div>

              <div className="flex items-center justify mb-6">
                <button
                  type="submit"
                  className="bg-slate-800 text-white text-center px-2 py-2 rounded hover:bg-blue-800">Submit</button>
                <span className="text-black text-md text-center px-12">
                  Already registered?{' '}
                  <Link className="ml-2 text-blue-600 hover:text-blue-800 underline" href="/login">Log in here!</Link>
                </span>
              </div>
            </form>
  )
}

"use server"

import { LoginFormData } from "@/app/login/page";
import { RegisterFormData } from "@/app/register/page";
import { prisma } from "@/lib/prisma";
import { compare } from "bcrypt-ts";

 export async function signUp(data: RegisterFormData) {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });
  return {status: 200, message: 'User successfully signed up!'};
}

export async function login(data: LoginFormData) {
  try{
  const user = await prisma.user.findUnique({
    where: {
       email: data.email }, // Find user by email
  });
  if (user){
  const isPasswordMatch = await compare(data.password, user.password);
  if (!isPasswordMatch) {
    throw new Error('Invalid credentials');
  }
}
} catch(error){
  return {status: 500, message: 'Invalid credentials'}
};

  return {status: 200, message: 'Login successful'};
}

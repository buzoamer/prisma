import { prisma } from "@/lib/prisma";

export async function signUp(data: { email: string; password: string }) {
  const user = await prisma.user.create({
    data: {
      username: data.email,
      password: data.password,
    },
  });
  return {status: 200, message: 'User successfully signed up!'};
}

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { username: credentials.email }, // Find user by email
  });

  if (!user || user.password !== credentials.password) {
    throw new Error('Invalid credentials');
  }

  return { status: 200, message: 'Login successful' };
}

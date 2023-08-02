import { PrismaClient } from '@prisma/client';

export async function userService(){
  register
  login
const prisma = new PrismaClient();

async function register(data: any) {
  const user = await prisma.user.create({
    data: {
      username: data.email,
      password: data.password,
    },
  });
  return user;
}

async function login(data: any) {
  const user = await prisma.user.findUnique({
    where: { username: data.username },
  });

  if (!user || user.password !== data.password) {
    throw new Error('Invalid credentials');
  }

  return user;
}
}
export default userService;

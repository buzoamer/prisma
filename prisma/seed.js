const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
      data: {
      name: "Test",
      email: "amer@email.com",
      password: "test"
}})
  await prisma.event.create({
    data: {
      title: "Prisma 2",
      short_description: "Prisma event test 2",
      content: "This is an event seeded by Prisma",
      created_by : user.id
    }

  });

}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
      data: {
      name: "Admin",
      email: "test@email.com",
      password: "admin"
}})
  await prisma.event.create({
    data: {
      title: "Prisma",
      short_description: "Prisma event test",
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
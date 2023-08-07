const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
   await prisma.user.create({
      data: {
      name: "Admin",
      email: "admin@admin.com",
      password: "password"
}});

}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
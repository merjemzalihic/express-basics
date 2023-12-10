const prisma = require("../prisma/prisma");

async function getAll() {
  const users = await prisma.user.findMany();

  return users;
}

async function getById(id) {
  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  return user;
}

async function create(user) {
  const newUser = await prisma.user.create({
    data: user,
  });

  return newUser;
}

module.exports = { getAll, getById, create };

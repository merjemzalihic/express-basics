const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
app.use(express.urlencoded({ extended: true }));
const prisma = new PrismaClient();

app.get("/user/", async (req, res) => {
  const data = await prisma.user.findMany();
  res.send(data);
});

app.get("/user/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  const user = await prisma.user.findFirst({ where: { id: userId }, select: { firstName: true, lastName: true } });
  res.send(user);
});

app.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});

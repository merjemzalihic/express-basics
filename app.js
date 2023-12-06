const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

// app.get("/", async (req, res) => {
//   const data = await prisma.user.findMany();
//   res.send(data);
// });

app.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});

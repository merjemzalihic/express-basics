const express = require("express");
const { getAll, getById, create } = require("./controllers/userController");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/user/", async (req, res) => {
  const data = await getAll();
  res.send(data);
});

app.get("/user/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  const user = await getById(userId);
  res.send(user);
});

app.post("/user/", async (req, res) => {
  try {
    const data = req.body;
    const user = await create(data);
    res.send(user);
  } catch (error) {
    res.status(500).send("User could not be created");
  }
});

app.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});

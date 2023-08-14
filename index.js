const express = require("express");
const app = express();

const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello Prahlad Inala</h1>");
});

// INSTAGRAM
app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "prahladinala",
    followers: 1000,
    follows: 100,
    date: Date.now(),
  };
  res.status(200).json({ instaSocial });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

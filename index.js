const express = require("express");
const app = express();

const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Hello Prahlad!</h1>");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

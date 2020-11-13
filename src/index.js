// const { setupServer } = require("./server");

// const server = setupServer();
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log("Server listening on Port", PORT);
// });

const express = require("express");
const app = express();
const db = require("./models/index");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/create", function (req, res) {
  db.games
    .create({
      name: "Counter-Strike: Global Offensive",
      rel_date: "2012-08-12",
      price: "14.99",
      discounted_price: "14.99",
      discount_per: "0",
    })
    .then(() => {
      res.send("Data Created.");
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require("express");
const _ = require("underscore");
const db = require("../models/index");

const setupServer = () => {
  /**
   * Create, set up and return your express server, split things into separate files if it becomes too long!
   */
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.post("/create", function (req, res) {
    db.game
      .create({
        name: "Counter-Strike: Global Offensive",
        rel_date: "2012-08-12",
        price: "14.99",
        discounted_price: "14.99",
        discount_per: "0",
      })
      .then(() => {
        res.status(201).send("Data Created.");
      });
  });

  app.patch("/", (req, res) => {
    res.send("Hello World!");
  });

  app.delete("/", (req, res) => {
    res.send("Hello World!");
  });

  return app;
};

module.exports = { setupServer };

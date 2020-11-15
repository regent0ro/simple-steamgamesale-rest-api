const express = require("express");
//const _ = require("underscore");
const db = require("../models/index");

const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(301).redirect(301, "/games");
  });

  app.get("/games", (req, res) => {
    db.game
      .findAll()
      .then((games) => {
        res.send(games);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).end();
      });
  });

  app.post("/games", function (req, res) {
    db.game
      .create(req.body)
      .then((db_res) => {
        res.status(201).send(db_res);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).end();
      });
  });

  // app.patch("/", (req, res) => {
  //   res.send("Hello World!");
  // });

  // app.delete("/", (req, res) => {
  //   res.send("Hello World!");
  // });

  return app;
};

module.exports = { setupServer };

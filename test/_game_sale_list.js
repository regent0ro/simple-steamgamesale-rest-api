const { expect, assert } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");

const server = setupServer();

describe("game_sale_list", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("GET /", function () {
    it("should redirect GET /games", function (done) {
      request
        .get("/")
        .redirects(0)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(301);
          expect(res).to.redirectTo("/games");
          done();
        });
    });
  });
  describe("GET /games", function () {
    it("should GET all game sale list data(200)", function (done) {
      request.get("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.body.length).to.equal(10);
        done();
      });
    });
  });
  describe("POST /games", function () {
    it("should create new game sale data", function (done) {
      const new_game = {
        name: "DRAGON QUEST HEROES",
        rel_date: "2017-04-25",
        price: "59.99",
        discounted_price: "39.99",
        discount_per: "33.33",
      };
      request
        .post("/games")
        .send(new_game)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(201);
          assert.isObject(res.body);

          const actual = res.body;
          delete actual.id;
          delete actual.createdAt;
          delete actual.updatedAt;

          expect(res.body).to.deep.equal(new_game);
          done();
        });
    });
  });
  describe("PATCH /games/:id", function () {
    const modified_game_info = {
      price: "1000.99",
    };
    it("should modify existing game data", function (done) {
      const id = 1;
      request
        .patch(`/games/${id}`)
        .send(modified_game_info)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.deep.equal([id]);
          done();
        });
    });
    it("shouldn't modify NON-existing game data", function (done) {
      request
        .patch("/games/999")
        .send(modified_game_info)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(400);
          done();
        });
    });
  });
  describe("DELETE /games/:id", function () {
    const id = 5;
    it("should delete game sale list data", function (done) {
      request.delete(`/games/${id}`).end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
    it("shouldn't delete NON-existing game data", function (done) {
      request.delete("/games/999").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(400);
        done();
      });
    });
  });
});

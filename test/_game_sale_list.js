const { expect, assert } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");

const server = setupServer();
describe("game_sale_list", function () {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });
  xdescribe("GET /", function () {
    it("should redirect GET /games", function () {
      request.get("/").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(301);
        done();
      });
    });
  });
  describe("GET /games", function () {
    it("should return game sale list data", function () {
      request.get("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
  xdescribe("POST /games", function () {
    it("should create new game sale data", function () {
      request.post("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(201);
        done();
      });
    });
  });
  xdescribe("PATCH /games", function () {
    it("should modify existing game data", function () {
      request.patch("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
    it("shouldn't modify NON-existing game data", function () {
      request.patch("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(201);
        done();
      });
    });
  });
  xdescribe("DELETE /games", function () {
    it("should delete game sale list data", function () {
      request.delete("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
    it("shouldn't delete NON-existing game data", function () {
      request.delete("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
});

const { expect /*, assert*/ } = require("chai");
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
  xdescribe("POST /games", function () {
    it("should create new game sale data", function (done) {
      request.post("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(201);
        done();
      });
    });
  });
  xdescribe("PATCH /games", function () {
    it("should modify existing game data", function (done) {
      request.patch("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
    it("shouldn't modify NON-existing game data", function (done) {
      request.patch("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(201);
        done();
      });
    });
  });
  xdescribe("DELETE /games", function () {
    it("should delete game sale list data", function (done) {
      request.delete("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
    it("shouldn't delete NON-existing game data", function (done) {
      request.delete("/games").end(function (err, res) {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
});

"use strict";
require("dotenv").config();
const supertest = require("supertest");
const { expect } = require("chai");
const request = supertest("http://localhost:3000");
const TOKEN = process.env.TOKEN;

describe("Negative tests", () => {
  it("year should be Number value", async () => {
    const data = {
      name: "Shato",
      wine: "Red",
      year: "2010",
      origine: "Terra",
    };
    const postRest = await request
      .post("/inventory")
      .send(data)
      .then((res) => {
        expect(res.body.year).to.contain(Number);
      });
  });
});

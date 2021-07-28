"use strict";
require("dotenv").config();
const supertest = require("supertest");
const { expect } = require("chai");
const request = supertest("http://localhost:3000");
const TOKEN = process.env.TOKEN;

describe("Positive API-test", () => {
  let sampleId;
  it("POST /inventory", () => {
    const data = {
      name: "Shato",
      wine: "Red",
      year: 2010,
      origine: "Terra",
    };
    return request
      .post("/inventory")
      .send(data)
      .then((res) => {
        expect(res.body.name).to.be.eq(res.body.name);
        sampleId = res.body._id;
      });
  });

  it("GET /byId", () => {
    return request.get(`/inventory/${sampleId}`).then((res) => {
      expect(res.body._id).to.be.eq(`${sampleId}`);
    });
  });

  it("DELET /byId", () => {
    return request.delete(`/inventory/${sampleId}`).then((res) => {
      expect(res.body.name).to.be.eq(res.body.name);
    });
  });
  it("GET /inventory", () => {
    return request.get("/inventory").then((res) => {
      expect(res.body).not.to.be.empty;
    });
  });
});

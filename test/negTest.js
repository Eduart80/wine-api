"use strict";
require("dotenv").config();
const supertest = require("supertest");
const { expect } = require("chai");
const request = supertest("http://localhost:3000");
const TOKEN = process.env.TOKEN;
const useNew = require("../userEntry");
const InventorySchema = require("../model/inventoryModel");

function entery() {
  let name = ["eva", "dove", "Molle", "Tanga"];
  let rand = Math.floor(Math.random() * name.length);
  return name[rand];
}
function enteryNumb() {
  let numb = [2010, 2000, 1984, 1947, 1980, 1999];
  let rand = Math.floor(Math.random() * numb.length);
  return numb[rand];
}

describe("Negative tests", () => {
  it("Post / wrong data entry", async () => {
    const inventory = {
      name: "name",
      wine: "wine",
      year: 9090,
      origine: "origine",
    };
    const postReq = await request.post("/inventory").send(inventory);
    expect(postReq.body.name, "name showld be string").to.be.eq("name");
    expect(postReq.body.wine, "wine showld be string").to.be.a("string");
    expect(postReq.body.year, "year showld be Number").to.be.a("number");
  });
  //
  it("GET / id not present", async () => {
    const keyId = "60ff8fb530aca20da0000000";
    await request.get(`/inventory/${keyId}`).then((res) => {
      expect(res.status, "bad request").to.be.eq(404);
    });
  });
  //
  it("DELET /byId", async () => {
    const nameOf = "60ff9c054e9c5935f0ff0fb2";
    await request.delete(`/inventory/${nameOf}`).then((res) => {
      expect(res.status, "bad request").to.be.eq(404);
      expect(res.body.message, "message of nothing found").to.be.eq(
        "Nothing found inside inventory"
      );
    });

    //expect(res.status).to.be.eq(404);
  });
});



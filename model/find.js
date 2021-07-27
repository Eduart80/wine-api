const express = require("express");

async function entryID(req, res) {
  if (req.body.name != null) {
    res.inventory.name = req.body.name;
  }
  if (req.body.wine != null) {
    res.inventory.wine = req.body.wine;
  }
  if (req.body.year != null) {
    res.inventory.year = req.body.year;
  }
  if (req.body.origine != null) {
    res.inventory.origine = req.body.origine;
  }
}

exports.default = entryID;

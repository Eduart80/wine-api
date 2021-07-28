const express = require("express");

function entry() {
  let name = ["eva", "dove", "Molle", "Tanga"];
  let rand = Math.floor(Math.random() * name.length);
  return rand;
}

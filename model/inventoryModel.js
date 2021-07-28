const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  wine: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  origine: {
    type: String,
    required: true,
  },
  inventoryDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
module.exports = mongoose.model("inventorySchema", inventorySchema);

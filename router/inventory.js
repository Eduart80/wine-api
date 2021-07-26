const express = require("express");
const router = express.Router();
const InventorySchema = require("../model/inventoryModel");

//GET all
router.get("/", async (req, res) => {
  try {
    const inventory = await InventorySchema.find();
    res.send(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//GET one
router.get("/:id", getInventory, (req, res) => {
  res.json(res.inventory);
});
// POST one
router.post("/", async (req, res) => {
  const inventory = new InventorySchema({
    name: req.body.name,
    wine: req.body.wine,
    year: req.body.year,
    origine: req.body.origine,
  });
  try {
    const newInventory = await inventory.save();
    res.status(200).json(newInventory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//PATCH by id
router.patch("/:id", getInventory, async (req, res) => {
  if (req.body.name != null) {
    res.inventory.name = req.body.name;
  }
  try {
    const updatedInventory = await res.inventory.save();
    res.json(updatedInventory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//PUT one by id
router.put("/:id", getInventory, async (req, res) => {
  try {
    if (req.body.name != null) {
      res.inventory.name = req.body.name;
    }
    if (req.body.wine != null) {
      res.inventory.wine = req.body.wine;
    }
    if (req.body.name != null) {
      res.inventory.year = req.body.year;
    }

    const updateInventory = await res.inventory.save();
    res.status(201).json(updateInventory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//DELETE one
router.delete("/:id", getInventory, async (req, res) => {
  try {
    await res.inventory.remove();
    res.send("delete request ");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getInventory(req, res, next) {
  let inventory;
  try {
    inventory = await InventorySchema.findById(req.params.id);
    if (inventory == null) {
      return res
        .status(404)
        .json({ message: "Nothing found inside inventory" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.inventory = inventory;
  next();
}

module.exports = router;

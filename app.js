require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000


const app = express();
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Databese conected"));

app.use(express.json());
const wineRouter = require("./router/inventory");
app.use("/inventory", wineRouter);



app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

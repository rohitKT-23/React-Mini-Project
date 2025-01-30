const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Arrays", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Item = require("./models/Item");

app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(5000, () => console.log("Server started on port 5000"));

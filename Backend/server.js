const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

const foodRoutes = require("./routes/foodRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/food", foodRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

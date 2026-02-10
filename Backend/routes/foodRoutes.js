const express = require("express");
const Food = require("../models/Food");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({ storage });

// Add food
router.post("/", upload.single("image"), async (req, res) => {
  const food = new Food({
    userName: req.body.userName,
    foodName: req.body.foodName,
    mealType: req.body.mealType,
    date: req.body.date,
    image: req.file.filename
  });
  await food.save();
  res.json(food);
});

// Get all food
router.get("/", async (req, res) => {
  const foods = await Food.find().sort({ date: -1 });
  res.json(foods);
});

module.exports = router;

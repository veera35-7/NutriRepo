const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  userName: String,
  foodName: String,
  mealType: String, // Breakfast, Lunch, Dinner
  date: Date,
  image: String
});

module.exports = mongoose.model("Food", foodSchema);

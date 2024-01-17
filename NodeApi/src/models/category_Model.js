const mongoose = require("mongoose");

// Define the schema for the "categories" model
const categorySchema = new mongoose.Schema({
  name: String,
  level: Number,
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
});

// Register the "categories" model with the defined schema
const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
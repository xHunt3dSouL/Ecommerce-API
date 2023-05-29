const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title field is required!"],
    unique: true,
    minlength: [10, "Title length should be minimum 10 words"],
    maxlength: [100, "Title length can be only maximum 100 words"],
  },
  price: {
    type: Number,
    required: [true, "Price field is required"],
    min: 0,
  },
  description: {
    type: String,
    required: [true, "Description field is required"],
  },
  category: {
    type: String,
    required: [true, "Category field is required"],
  },
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});
const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;

const ProductModel = require("../models/product");

// Function to get all products
const getAllProduct = async (req, res) => {
  const { category, minprice } = req.query;
  const productData = await ProductModel.find();
  res.json(productData);
  // Apply filters based on category and minprice
  if (category && minprice) {
    const filteredData = await ProductModel.find({ category, price: minprice });
    res.json(filteredData);
  } else if (category) {
    const filteredData = await ProductModel.find({ category });
    res.json(filteredData);
  } else if (minprice) {
    const filteredData = await ProductModel.find({ price: minprice });
    res.json(filteredData);
  } else {
    const productData = await ProductModel.find();
    res.json(productData);
  }
};

// Function to get a single product by ID
const getSingleProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const product = await ProductModel.findById(productID);
    res.json(product ? product : "Product Not Found");
  } catch (err) {
    console.log("Something Wrong");
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

// Function to create a product
const createProduct = (req, res) => {
  res.send("The API will create a product in the database");
};

// Function to replace a product
const replaceProduct = (req, res) => {
  res.send("The API will replace a product in the database");
};

// Function to update a product
const updateProduct = (req, res) => {
  res.send("The API will update a product in the database");
};

// Function to delete a product
const deleteProduct = (req, res) => {
  res.send("The API will delete a product from the database");
};

// Exporting the controller functions
module.exports = {
  getAllProduct, // Exporting the function to get all products
  getSingleProduct, // Exporting the function to get a single product
  createProduct, // Exporting the function to create a product
  replaceProduct, // Exporting the function to replace a product
  updateProduct, // Exporting the function to update a product
  deleteProduct, // Exporting the function to delete a product
};

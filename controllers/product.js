const productData = require('../Data/product.json');

// Function to get all products
const getAllProduct = (req, res) => {
  console.log(req.query);
  const { category, minprice } = req.query;

  // Apply filters based on category and minprice
  if (category && minprice) {
    const filteredData = productData.filter(
      (element) => element.category === category && element.price >= minprice
    );
    res.json(filteredData);
  } else if (category) {
    const filteredData = productData.filter(
      (element) => element.category === category
    );
    res.send(filteredData);
  } else if (minprice) {
    const filteredData = productData.filter(
      (element) => element.price >= minprice
    );
    res.json(filteredData);
  } else {
    res.json(productData);
  }
};

// Function to get a single product by ID
const getSingleProduct = (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const product = productData.find(
    (product) => product.id === Number(productID)
  );
  res.json(product ? product : "Product Not Found");
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
  getAllProduct,     // Exporting the function to get all products
  getSingleProduct,  // Exporting the function to get a single product
  createProduct,     // Exporting the function to create a product
  replaceProduct,    // Exporting the function to replace a product
  updateProduct,     // Exporting the function to update a product
  deleteProduct      // Exporting the function to delete a product
};

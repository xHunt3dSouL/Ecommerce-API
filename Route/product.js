const express = require("express");
const {
  getAllProduct,
  getSingleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const checkAPIKey = require("../middlewares/auth");

const logger = require("../middlewares/logger");

// Initialize router object
const router = express.Router();

router.get("/", checkAPIKey, getAllProduct);
// GET request for retrieving all products.
// The `checkAPIKey` middleware is applied before `getAllProduct` controller function.

router.get("/:productID", getSingleProduct);
// GET request for retrieving a single product by ID.

router.post("/", createProduct);
// POST request for creating a new product.

router.put("/:productID", replaceProduct);
// PUT request for replacing a product by ID.

router.patch("/:productID", updateProduct);
// PATCH request for updating a product by ID.

router.delete("/:productID", deleteProduct);
// DELETE request for deleting a product by ID.

// Export the router object
module.exports = router;

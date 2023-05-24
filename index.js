const express = require("express");
const PORT = 5000;

// Importing routes
const productRouter = require("./Route/product");
const homeRouter = require("./Route/home");
const errorRouter = require("./Route/error");
const cors = require("cors");
const morgan = require("morgan");
const logger = require("./middlewares/logger");

// Creating an Express server
const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Custom middleware for logging
app.use(logger);

// Morgan middleware for logging HTTP requests
app.use(morgan("dev"));

// Linking the routes
app.use(homeRouter); // Home route
app.use("/api/product", productRouter); // Product route
app.use(errorRouter); // Error route

// Start the server
app.listen(PORT, () => {
  console.log(`Server Started At Port ${PORT}`);
});

const express = require("express");
// Importing routes
const productRouter = require("./Route/product");
const homeRouter = require("./Route/home");
const errorRouter = require("./Route/error");
const cors = require("cors");
const morgan = require("morgan");
const logger = require("./middlewares/logger");
const connectDatabase = require("./database/connection");
require("dotenv").config();

// Creating an Express server
const app = express();

// Connecting to the database
connectDatabase();

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
app.listen(process.env.PORT, () => {
  console.log(`Server Started At Port ${process.env.PORT}`);
});

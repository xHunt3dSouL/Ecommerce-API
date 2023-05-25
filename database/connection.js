const mongoose = require("mongoose");

// Function to connect to the database
const connectDatabase = async () => {
  try {
    // Connect to the MongoDB database using the specified URL
    await mongoose.connect(process.env.CONNECTION_STRING);

    // If the connection is successful, log a success message
    console.log("Database connected successfully.");
  } catch (err) {
    // If there's an error during the connection, log the error
    console.log(err);
  }
};

// Export the connectDatabase function to make it accessible in other files
module.exports = connectDatabase;

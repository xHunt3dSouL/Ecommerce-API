const express = require("express");
const {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

// Initialize router object
const router = express.Router();

router.get("/", getAllUsers);
// GET request for retrieving all users.
// The `checkAPIKey` middleware is applied before `getAllUsers` controller function.

router.get("/:userID", getSingleUser);
// GET request for retrieving a single user by ID.

router.patch("/:userID", updateUser);
// PATCH request for updating a user by ID.

router.delete("/:userID", deleteUser);
// DELETE request for deleting a user by ID.

// Export the router object
module.exports = router;

// Import necessary modules
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");

// Step 1: Use environment variables
const PORT = process.env.PORT || 5000; // Fallback to 5000 if PORT is not set
const MONGO_URI = process.env.MONGO_URI; // Mongo URI from environment variable

// Step 2: Initialize the Express application
const app = express();

// Step 3: Use middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Step 4: Log every request method and path (for debugging purposes)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next(); // Pass control to the next middleware or route handler
});

// Step 5: Use userRoutes for handling routes that begin with /api
app.use("/api", userRoutes);

// Step 6: Connect to MongoDB database and start the server
mongoose
  .connect(MONGO_URI) // Step 6.1: Connect to the MongoDB cluster using the provided URI
  .then(() => {
    // Step 6.2: Once connected, start the Express server listening on the specified port
    app.listen(PORT, () => {
      console.log(`Connected to the database & listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    // Step 6.3: If an error occurs while connecting to the database, log the error
    console.error("Error connecting to the database:", error);
  });

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const PORT = 5000;

const MONGO_URI =
  "mongodb+srv://wamiqzahid319:wamiq319@cluster0.0nn7i.mongodb.net/Que";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/api", userRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to the database & listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

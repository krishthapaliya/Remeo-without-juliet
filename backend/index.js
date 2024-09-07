const express = require("express");
const { connectDatabase } = require("./database");
const app = express();
require("dotenv").config();

//json parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

//For connecting data we are invoking a function
connectDatabase(process.env.MONGO_URL);

//Routes/API
const eventRoutes = require("./Router/eventRouter");

app.use("/api", eventRoutes);

// Define a route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Sewa homepage</h1>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

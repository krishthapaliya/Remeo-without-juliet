const mongoose = require("mongoose");

exports.connectDatabase = async (URL) => {
  await mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Database connection error:", err));
};

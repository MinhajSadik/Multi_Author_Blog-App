const express = require("express");
const dotenv = require("dotenv");

dotenv.config({
  path: "./backEnd/configs/config.env",
});
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("Hello console viewers");
  res.send("Hello Web Viewers");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on port ${PORT}`);
  }
});

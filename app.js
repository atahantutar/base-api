const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const db = require("./config/dbConnection.js");
const router = require("./routes");
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));

db();
app.use("/", router);
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});

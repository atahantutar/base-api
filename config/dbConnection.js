const mongoose = require("mongoose");

const db = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@baseapi.n0zz9i5.mongodb.net/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to database: ", err);
    });
};

module.exports = db;

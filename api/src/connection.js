const mongoose = require("mongoose");

const User = require("./User.model");

// const connection = "mongodb://mongo:27017/mongo-test";
const connection = "mongodb://172.17.0.3:27017/mongo-test";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;

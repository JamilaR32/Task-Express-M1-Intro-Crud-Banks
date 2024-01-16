const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jrcba:dFapgI1nJU8ffodG@cluster0.ypoprbn.mongodb.net/myDatabase"
    );
    console.log("Connected!!");
  } catch (error) {
    console.log("Could Not connect");
  }
};
module.exports = connectDB;

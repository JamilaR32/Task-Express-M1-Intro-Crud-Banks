const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_MYLINK);
    console.log("Connected!!");
  } catch (error) {
    console.log("Could Not connect", error);
  }
};
module.exports = connectDB;

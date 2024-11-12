import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connect to database ${conn.connection.host}`);
  } catch (error) {
    console.log("Error occur when connect to mongoDB", error);
    process.exit(1);
  }
};

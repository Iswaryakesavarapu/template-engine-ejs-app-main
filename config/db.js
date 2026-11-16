import mongoose from "mongoose";

const connectDB = async (mongoURI, dbName) => {
  try {
    await mongoose.connect(mongoURI, {
      dbName: dbName,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;

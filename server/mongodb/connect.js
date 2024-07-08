import mongoose from "mongoose";

async function connectDB(url) {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export { connectDB };

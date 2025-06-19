import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI environment variable not set");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("MONGODB CONNECTION FAILED!", error);
    process.exit(1);
  }
};

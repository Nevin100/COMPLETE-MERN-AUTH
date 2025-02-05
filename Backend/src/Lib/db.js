import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server is Connected to MongoDb`);
  } catch (error) {
    console.log(error);
    console.log("Connection Failed");
  }
};

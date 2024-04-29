import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to Database: ${con.connection.name}`);
  } catch (error) {
    console.log("Error occurred in connectMongoDB");
  }
};

export default connectMongoDB;

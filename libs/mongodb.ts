import mongoose from "mongoose";
const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connect to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;
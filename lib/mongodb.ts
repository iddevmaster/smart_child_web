import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

export const dbConnect = async () => {
    if (connection.isConnected) {
        return;
    }
    
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI!);
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error)
    }
}
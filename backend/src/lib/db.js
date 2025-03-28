import mongoose from "mongoose";

import { MONGODB_URI } from "./env.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch (err) {
        console.log(`err: ${err}`)
    }
};
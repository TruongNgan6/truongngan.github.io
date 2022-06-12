import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            //
        });
        console.log(`Successfully connected to Mongoose... with host ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error when connect DB: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;

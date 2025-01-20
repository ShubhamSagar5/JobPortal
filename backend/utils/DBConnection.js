import mongoose from "mongoose";

const Connection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error Occur at the time of database connection',error.message);
    }
}

export default Connection;
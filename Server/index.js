import express from 'express';

import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGOURL).then(() => {
    console.log("Connected to MongoDB server");
}).catch((err) => {
    console.log(err);
})

const app = express();





// run sever
app.listen(3000, () => {
    console.log("Server running on port 3000")
})
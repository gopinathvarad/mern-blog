import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log("MongoDb is connected");
});

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 



// API's 

app.use('/api/user', userRoutes);

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// set up port
const port = process.env.PORT || 3000;

// load environment variables
dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// test
app.get('/', (req, res) => {
    res.json({ message: 'Is this working?' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
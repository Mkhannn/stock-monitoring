import express from 'express';
import connectDB from '../src/config/db';
import authRoutes from '../src/routes/authRoutes';
import watchlistRoutes from '../src/routes/watchListRoutes';
import dotenv from 'dotenv'

const app = express();
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/watchlist', watchlistRoutes);

export default app;

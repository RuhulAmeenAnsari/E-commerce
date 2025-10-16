import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectToDB from './config/db.js';
import userRouter from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import adminRoutes from './routes/admin.routes.js';

dotenv.config();

const app = express();

// Connect to database
connectToDB();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
  })
);

// Routes
app.use('/user', userRouter);
app.use('/product', productRoutes);
app.use('/admin', adminRoutes);

// ✅ Export as ES module
export default app;

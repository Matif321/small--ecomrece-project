import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load env vars
dotenv.config();

export const connectDB = async () => {
  try {
    // Determine the URI based on environment (production vs development fallback)
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      console.warn('⚠️  MONGODB_URI is not defined in .env! Failing back to local database...');
    }

    const conn = await mongoose.connect(MONGODB_URI || 'mongodb://127.0.0.1:27017/koreanza');

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

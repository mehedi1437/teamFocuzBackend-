
import app from './app';
import mongoose from 'mongoose';
import config from './app/config';
import { VercelRequest, VercelResponse } from '@vercel/node';

let isConnected = false;

async function connectToDatabase() {
  if (isConnected) {
    await mongoose.connect(config.database_Url as string);
    isConnected = true;
    console.log('🟢 Connected to MongoDB');
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await connectToDatabase();
  app(req, res); // Express handler
}
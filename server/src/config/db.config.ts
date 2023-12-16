/* eslint-disable no-console */
import mongoose from 'mongoose';

const connectDB = async () => {
  const url = process.env.MONGO_URI as string;
  await mongoose.connect(url);

  const db = mongoose.connection;

  db.once('open', () => console.log('Connected To mongodb'));
  db.on('error', (err) => console.log('Error in database: ', err));
};

import dotenv from 'dotenv';

dotenv.config();

export const mongoDBURL = process.env.MONGO_URI;
export const PORT = process.env.PORT || 3000;

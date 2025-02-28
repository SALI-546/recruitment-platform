import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
if (!uri) {
  throw new Error('MONGODB_URI is not defined in .env.local');
}

const client = new MongoClient(uri);

let cachedClient: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
  if (cachedClient) return cachedClient;
  try {
    await client.connect();
    cachedClient = client.db('recruitment');
    console.log('Successfully connected to MongoDB');
    return cachedClient;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}
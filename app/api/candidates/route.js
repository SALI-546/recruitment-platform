import { connectToDatabase } from '../../../lib/mongodb';

export async function GET() {
  const db = await connectToDatabase();
  const candidates = await db.collection('candidates').find({}).toArray();
  return new Response(JSON.stringify(candidates), { status: 200 });
}

export async function POST(request) {
  const data = await request.json();
  const db = await connectToDatabase();
  const result = await db.collection('candidates').insertOne(data);
  return new Response(JSON.stringify(result), { status: 201 });
}
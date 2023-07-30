import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URL;

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });

  cachedClient = client;

  return client;
}

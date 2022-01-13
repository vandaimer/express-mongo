import { MongoClient } from 'mongodb';

import DeliveryCollection from './Delivery';

const connectDB = (mongoURI) => {
  const client = new MongoClient(mongoURI);
  return client.connect();
}

export { connectDB };
export { DeliveryCollection };

import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI || '';

class Connection {
    static async open() {
        if (this.db) return this.db
        this.db = await MongoClient.connect(MONGO_URI);
        return this.db
    }
}

export default Connection;

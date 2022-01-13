import { getMongoClient } from './';
import mongoConnection from './mongodb';

class Delivery {
  static collection = 'records';

  static async getByStartDate(startDate) {
    const connection = await mongoConnection.open();
    return connection.db().collection(Delivery.collection).find({}).toArray();
  }
}

export default Delivery;

import { getMongoClient } from './';
import mongoConnection from './mongodb';

class Delivery {
  static collection = 'records';

  static async getByStartDate(startDate, endDate) {
    const connection = await mongoConnection.open();
    return connection.db().collection(Delivery.collection).find({
      createdAt : {
        '$gte': startDate,
        '$lt': endDate,
      }
    }).toArray();
  }
}

export default Delivery;

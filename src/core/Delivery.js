import { DeliveryValidator } from '../validators';
import { DeliveryCollection } from '../database';


class Delivery {
  static async getDeliveries(req) {
    const {
      body,
    } = req;

    const { error, value: { startDate, endDate, minCount, maxCount } } = DeliveryValidator.post(body);

    if (error) {
      throw new Error(error.message);
    }

    let deliveries = await DeliveryCollection.getByStartDate(startDate, endDate);

    deliveries = Delivery.buildTotalCount(deliveries);
    deliveries = Delivery.filterByMinCount(deliveries, minCount);
    deliveries = Delivery.filterByMaxCount(deliveries, maxCount);

    return Delivery.buildResponse(deliveries);
  }

  static buildResponse(deliveries) {
    return deliveries.map(({ key, createdAt, totalCount }) => ({
      key,
      createdAt,
      totalCount,
    }));
  }

  static buildTotalCount (deliveries) {
    return deliveries.map(({ counts, ...rest }) => {
      const totalCount = counts.reduce((previousValue, currentValue) => (previousValue + currentValue));
      return {
        ...rest,
        totalCount,
      };
    });
  }

  static filterByMinCount(deliveries, minCount) {
    return deliveries.filter(delivery => delivery.totalCount >= minCount);
  }

  static filterByMaxCount(deliveries, maxCount) {
    return deliveries.filter(delivery => delivery.totalCount <= maxCount);
  }
}

export default Delivery;

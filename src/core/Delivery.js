import { DeliveryValidator } from '../validators';


class Delivery {
  static getDeliveries(req) {
    const {
      body,
    } = req;

    const { error, value } = DeliveryValidator.post(body);

    if (error) {
      return {
        "code": 1,
        "msg": error.message,
        "results": [],
      }
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

  }
}

export default Delivery;

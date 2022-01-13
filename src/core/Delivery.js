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

  static filterByMinCount(deliveries, minCount) {
    return deliveries.filter(delivery => delivery.totalCount >= minCount);
  }

  }
}

export default Delivery;

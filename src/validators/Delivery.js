import Joi from 'joi';

export default class Delivery {
  static genericSchema() {
    return Joi.object()
      .keys({
        startDate: Joi.string().required(),
        endDate: Joi.string().required(),
        minCount: Joi.string().required(),
        maxCount: Joi.string().required(),
      });
  }

  static validate(schema, data) {
    return schema.validate(data, { stripUnknown: true });
  }

  static post(data) {
    const schema = DeliveryValidator.genericSchema();
    return DeliveryValidator.validate(schema, data);
  }
}

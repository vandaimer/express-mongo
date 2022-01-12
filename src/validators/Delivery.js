import Joi from 'joi';

export default class Delivery {
  static genericSchema() {
    return Joi.object()
      .keys({
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        minCount: Joi.number().integer().required(),
        maxCount: Joi.number().integer().required(),
      });
  }

  static validate(schema, data) {
    return schema.validate(data, { stripUnknown: true });
  }

  static post(data) {
    const schema = Delivery.genericSchema();
    return Delivery.validate(schema, data);
  }
}

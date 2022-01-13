import JoiBase from 'joi';
import JoiDate from '@joi/date';

const Joi = JoiBase.extend(JoiDate);

export default class Delivery {
  static genericSchema() {
    return Joi
      .object()
      .keys({
        startDate: Joi.date().format('YYYY-MM-DD').required(),
        endDate: Joi.date().format('YYYY-MM-DD').required(),
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

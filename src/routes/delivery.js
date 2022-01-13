import { Router } from 'express';

import Delivery from '../core/Delivery';
import { ResponseCode } from './';

const router = Router();

router.post('/', async (req, res) => {
  const defaultResponse = {
    code: '',
    msg: '',
    records: []
  };

  try {
    const records = await Delivery.getDeliveries(req);
    const response = {
      code: ResponseCode.SUCCESS,
      msg: "Success", // I will improve it later. Need to move to another place as I did for the Responde Codes.
      records,
    }
    return res.status(200).json(response);
  } catch ({ message: msg }) {
    const response = { ...defaultResponse, code: ResponseCode.INVALID_PAYLOAD, msg };
    return res.status(400).json(response);
  }
});


export default router;

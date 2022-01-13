import { Router } from 'express';

import Delivery from '../core/Delivery';
import { ResponseCode } from './';

const router = Router();

router.post('/', async (req, res) => {
  const defaultResponse = {
    code: '',
    msg: '',
    result: []
  };

  try {
    const result = Delivery.getDeliveries(req);
    return res.status(200).json(results);
  } catch ({ message: msg }) {
    const response = { ...defaultResponse, code: ResponseCode.INVALID_PAYLOAD, msg };
    return res.status(400).json(response);
  }
});


export default router;

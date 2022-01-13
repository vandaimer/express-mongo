import { Router } from 'express';

import Delivery from '../core/Delivery';
import { Errors } from './';

const router = Router();

router.post('/', async (req, res) => {
  const defaultResponse = {
    code: '',
    msg: '',
    result: []
  };

  try {
    const result = Delivery.getDeliveries(req);
    return res.status(200).json(result);
  } catch ({ message: msg }) {
    const response = { ...defaultResponse, code: Errors.INVALID_PAYLOAD, msg };
    return res.status(400).json(response);
  }
});


export default router;

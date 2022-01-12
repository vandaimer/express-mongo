import { Router } from 'express';

import Delivery from '../core/Delivery';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const result = Delivery.getDeliveries(req);
    return res.status(200).json(result);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});


export default router;

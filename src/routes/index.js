import { Router } from 'express';

import delivery from './delivery';
import ResponseCode from './responseCode';

const router = Router();

router.use('/delivery', delivery);

export { ResponseCode };
export default router;

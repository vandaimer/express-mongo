import { Router } from 'express';

import delivery from './delivery';
import Errors from './errors';

const router = Router();

router.use('/delivery', delivery);

export { Errors };
export default router;

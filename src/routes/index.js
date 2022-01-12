import { Router } from 'express';

import delivery from './delivery';

const router = Router();

router.use('/delivery', delivery);

export default router;

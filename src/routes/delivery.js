import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const fakeData = { 'data': 'fake' };
    return res.status(200).json(fakeData);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});


export default router;

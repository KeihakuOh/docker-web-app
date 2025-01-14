import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

apiRouter.get('/info', (req, res) => {
  res.json({
    version: '1.0.0',
    description: 'This is a simple API for demonstration purposes.',
  });
});

export default apiRouter;

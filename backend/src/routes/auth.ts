import { Router, Request, Response } from 'express';

const authRouter = Router();

interface LoginRequestBody {
  username: string;
}

authRouter.post(
  '/login',
  (req: Request<{}, {}, LoginRequestBody>, res: Response): void => {
    const { username } = req.body;

    if (!username || username.length < 6) {
      res.status(400).json({ error: 'Username must be at least 6 characters long.' });
      return;
    }

    res.json({ message: 'Login successful!' });
  }
);

// ログアウトエンドポイント
authRouter.post('/logout', (req: Request, res: Response): void => {
  // ログアウト時に何か特別な処理が必要ならここで行う
  res.json({ message: 'Logout successful!' });
});

export default authRouter;

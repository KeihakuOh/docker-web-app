import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api';
import authRoutes from './routes/auth';

const app = express();
const PORT = 5000;

// 必要なミドルウェア
app.use(cors());
app.use(express.json());

// ルートの登録
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});

# ベースイメージ
FROM python:3.11-slim

# 作業ディレクトリを設定
WORKDIR /app

# アプリケーションのコードをコピー
COPY app/ /app

# 依存関係をインストール
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションを起動
CMD ["python", "app.py"]
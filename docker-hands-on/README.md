このハンズオンでは、簡単な Flask アプリケーションを Docker コンテナで実行する方法を学びます。

## 実行方法

1. `docker-hands-on/` ディレクトリに移動します。
2. 指示に従い Docker イメージをビルドし、コンテナを起動します。
3. ブラウザで結果を確認します。

## ステップ

1. Docker イメージのビルド:

   ```bash
   docker build -t my-flask-app .
   ```

2. コンテナの実行:

   ```bash
   docker run -d -p 5000:5000 my-flask-app
   ```

3. アプリケーションの確認:
   ブラウザで `http://localhost:5000` にアクセスすると、"Hello, Docker World!" と表示されます。

4. コンテナの停止:
   ```bash
   docker ps
   docker stop <コンテナID>
   ```

## クリーンアップ

- コンテナの削除:

  ```bash
  docker rm <コンテナID>
  ```

- イメージの削除:
  ```bash
  docker rmi my-flask-app
  ```

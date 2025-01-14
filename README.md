## Backend のセットアップ

```
cd backend
npm init -y
npm install express @types/express typescript ts-node
npx tsc --init
cd ..
```

## Frontend のセットアップ

```
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm run dev
cd ..
```

## Docker イメージのビルドと起動

```
docker-compose up --build
```

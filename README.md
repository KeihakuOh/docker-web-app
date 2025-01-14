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
cd frontend
npm init -y
npm install react react-dom @types/react @types/react-dom typescript
npx tsc --init
cd ..
```

## Docker イメージのビルドと起動

```
docker-compose up --build
```



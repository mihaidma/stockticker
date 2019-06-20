# Stockticker

Dockerised Node.js rest service that returns stock ticker prices from a stock exchange.

## Start the service

Start the service on local:

- Raw output:
```
npm run start:raw
```
- Formatted output:
```
npm start
```

Start the service in a docker container:
```
docker-compose up -d
```

## Run tests

- Tests not needing the service to run on local:
```
npm test
```

- Run all tests including integration tests. The service must be running at the time when the tests are launched:
```
npm run test:full
```

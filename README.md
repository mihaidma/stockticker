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

## TODO

- Extract the `./scripts/feeder.js` as a separate service and use a pubsub service like Redis to communicate with the ticker service
- Enhance the WebSocket error handling: wrapping in try catch, check heartbeat for silent failure, handle the onError callback, check the error flag provided by send
- Add Joi validation on config

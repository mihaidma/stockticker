
const config = require('../config')
const Server = require('./server')
const logger = require('pino')()

process.on('uncaughtException', err => {
  logger.error(err, 'Uncaught exception')
  process.exit(1)
})

process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at: ', p, 'reason: ', reason)
  process.exit(1)
})

const startServer = async () => {
  try {
    const server = await Server(config)
    await server.start()
    logger.info('server running on: ', config.host, config.port)
  } catch (error) {
    logger.error(error)
    process.exit(1)
  }
}

startServer()

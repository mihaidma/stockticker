const Nes = require('@hapi/nes')
const logger = require('pino')()

const config = require('../config')

const client = new Nes.Client(`ws://${config.host}:${config.port}`)

const start = async () => {
  await client.connect()
  const handler = (update, flags) => {
    logger.info('ticker: ', update)
  }

  client.subscribe('/ticker', handler)
}

start()

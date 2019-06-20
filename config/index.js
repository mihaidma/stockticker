require('dotenv').config()

const {
  HOST = 'localhost',
  PORT = 8800
} = process.env

const config = {
  host: HOST,
  port: PORT,
  feed: 'wss://ws.kraken.com/',
  db: {
  },
  test: {
  }
}

module.exports = config

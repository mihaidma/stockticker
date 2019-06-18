const WebSocket = require('ws')

const config = require('../config')

const ws = new WebSocket(config.feed)
ws.on('open', () => {
  const subs = JSON.stringify({
    'event': 'subscribe',
    'pair': ['XBT/USD', 'XBT/EUR'],
    'subscription': {
      'name': 'ticker',
      'interval': 1
    }
  })
  ws.send(subs)
})

ws.on('message', (data) => {
  console.log(data)
})

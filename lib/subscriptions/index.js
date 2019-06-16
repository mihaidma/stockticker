const ticker = require('./ticker')

module.exports = {
  name: 'subscriptions',
  version: '1.0.0',
  register: async (server, options) => {
    server.subscription('/ticker', ticker)
  }
}

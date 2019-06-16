
const health = require('../routes/health')

module.exports = {
  name: 'routes',
  version: '1.0.0',
  register: async (server, options) => {
    server.route(health)
  }
}

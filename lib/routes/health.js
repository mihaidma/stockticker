const health = require('../handlers/health')

module.exports = [
  {
    method: 'GET',
    path: '/health',
    config: {
      description: 'Server readiness check',
      tags: ['api'],
      handler: health
    }
  }
]

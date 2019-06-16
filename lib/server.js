
const Hapi = require('@hapi/hapi')
const Nes = require('@hapi/nes')
const hapiPino = require('hapi-pino')

const routes = require('./routes')
const subscriptions = require('./subscriptions')

const registerPlugins = async (server, config) => {
  const plugins = [
    {
      plugin: hapiPino,
      options: {
        prettyPrint: false,
        logEvents: ['response', 'onPostStart']
      }
    },
    {
      plugin: Nes,
      options: { auth: false }
    }
  ]

  try {
    await server.register(plugins)
  } catch (error) {
    server.logger().error(error, 'Failed to register hapi plugins')
    throw error
  }
}

const registerRoutes = async (server) => {
  try {
    await server.register(routes)
  } catch (error) {
    server.logger().error(error, 'Failed to register routes')
    throw error
  }
}

const registerSubscriptions = async (server) => {
  try {
    await server.register(subscriptions)
  } catch (error) {
    server.logger().error(error, 'Failed to register subscriptions')
    throw error
  }
}

const startEmitting = (server) => {
  let price = 10

  setInterval(() => {
    server.publish('/ticker', { id: 'EUR', price })
    server.logger().info('/ticker ', price)
    price++
  }, 2000)
}

module.exports = async (config) => {
  const { host, port } = config
  const server = Hapi.server({ host, port, routes: { cors: true } })

  await registerPlugins(server, config)
  await registerRoutes(server)
  await registerSubscriptions(server)

  startEmitting(server)

  return server
}

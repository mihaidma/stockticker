
const Hapi = require('@hapi/hapi')
const Nes = require('@hapi/nes')
const hapiPino = require('hapi-pino')

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
      plugin: Nes
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
  // try {
  //   await server.register(routes)
  // } catch (error) {
  //   server.logger().error(error, 'Failed to register routes')
  //   throw error
  // }
}

module.exports = async (config) => {
  const { host, port } = config
  const server = Hapi.server({ host, port, routes: { cors: true } })

  await registerPlugins(server, config)
  await registerRoutes(server)

  return server
}


const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')

const Server = require('../../lib/server')
const config = require('../../config/index')

const lab = exports.lab = Lab.script()
const { describe, it, before, after } = lab

let testServer

describe('Health check endpoint', () => {
  before(async () => {
    testServer = await Server(config)
  })

  after(async () => {
    await testServer.stop()
  })

  it('returns ok when server available', async () => {
    const opts = {
      method: 'GET',
      url: '/health'
    }
    const res = await testServer.inject(opts)
    expect(res.statusCode).to.equal(200)
    expect(res.result.status).to.equal('ok')
  })
})

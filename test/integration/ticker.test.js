const Nes = require('@hapi/nes')
const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')

const config = require('../../config/index')

const lab = exports.lab = Lab.script()
const { describe, it } = lab

describe('ticker subscription', () => {
  it('server subscription', async (flags) => {
    const client = new Nes.Client(`ws://${config.host}:${config.port}`)
    await client.connect()
    const handler = (update, flags) => {
      const { id } = update
      expect(id).to.not.be.empty(10)
    }
    const wrapped = flags.mustCall(handler, 1)

    client.subscribe('/ticker', wrapped)
  })
})

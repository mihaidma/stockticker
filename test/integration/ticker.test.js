const Nes = require('@hapi/nes')
const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const Teamwork = require('@hapi/teamwork')

const config = require('../../config/index')

const lab = exports.lab = Lab.script()
const { describe, it } = lab

describe('ticker subscription', () => {
  it('server subscription', async () => {
    const client = new Nes.Client(`ws://${config.host}:${config.port}`)
    await client.connect()

    const team = new Teamwork()
    const handler = (update, flags) => {
      const { data } = update
      expect(data).to.not.be.empty()
      expect(client.subscriptions()).to.equal(['/ticker'])
      team.attend()
    }

    client.subscribe('/ticker', handler)
    await team.work
    client.disconnect()
  })
})

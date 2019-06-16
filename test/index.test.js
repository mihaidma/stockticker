const { expect } = require('@hapi/code')
const Lab = require('@hapi/lab')
const lab = exports.lab = Lab.script()

const { describe, it } = lab

describe('Test', () => {
  it('test', async () => {
    expect(true).to.equal(true)
  })
})

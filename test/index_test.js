const assert = require('assert')
const Rooster = require('../index.js')

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // setup
      const expected = 'cock-a-doodle-doo!'
      // exercise
      const sound = Rooster.announceDawn()
      // verify
      assert.strictEqual(expected, sound)
    })
  })
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // setup
      const hour = 4
      // exercise
      const hourStr = Rooster.timeAtDawn(hour)
      // verify
      assert.strictEqual(typeof(hourStr), 'string')
    })
    it('returns an error if passed a number less than 0', () => {
      // setup
      const hour = -1
      // exercise and verify
      assert.throws(() => { Rooster.timeAtDawn(hour) }, RangeError)
    })
    it('returns an error if passed a number greater than 23', () => {
      // setup
      const hour = 24
      // exercise and verify
      assert.throws(() => { Rooster.timeAtDawn(hour) }, RangeError)
    })
  })
})

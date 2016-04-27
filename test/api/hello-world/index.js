const Code = require('code')
const Lab = require('lab')
const MockServer = require('../../mocks/server')

const HelloWorld = require('../../../src/js/api/hello-world')

const lab = exports.lab = Lab.script()
const describe = lab.describe
const before = lab.before
const after = lab.after
const it = lab.it
const expect = Code.expect
var server

before((done) => {
  MockServer((obj) => {
    server = obj
    server.register([{
      register: HelloWorld
    }], done)
  })
})

after((done) => {
  server.stop(done)
})

describe('Hello World', () => {

  it('says hello to a specific name', (done) => {
    var options = {
      method: 'GET',
      url: '/hello/leo'
    }

    server.inject(options, (response) => {
      expect(response.statusCode).to.equal(200)
      expect(response.request.response.source).to.deep.equal({ hello: 'leo' })
      done()
    })
  })

})
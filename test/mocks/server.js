const Server = require('hapi').Server
const server = new Server()

server.connection()

module.exports = (done) => {
  server.start(() => done(server))
}
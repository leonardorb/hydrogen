const Server = require('hapi').Server
const WebpackPlugin = require('hapi-webpack-plugin')

const HelloWorld = require('./hello-world')

const server = new Server()

server.connection({
  port: 3000
})

server.register([{
  register: WebpackPlugin,
  options: 'configs/webpack.config.js'
}, {
  register: HelloWorld
}], error => {
  if (error) {
    console.log(error)
  }

  server.start((err) => {
    if (error) {
      throw err
    }

    console.log(`Server running at: ${server.info.uri}`)
  })    

})

module.exports = server
const Server = require('hapi').Server
const WebpackPlugin = require('hapi-webpack-plugin')

const server = new Server()

server.connection({
  port: 3000
})

server.register({
  register: WebpackPlugin,
  options: 'configs/webpack.config.js'
}, error => {
  if (error) {
    console.log(error)
  }

  // server.route({
  //   method: 'GET',
  //   path: '/',
  //   handler: (request, reply) => { return reply('Hello World') }
  // })

  server.start((err) => {
    if (error) {
      throw err
    }

    console.log(`Server running at: ${server.info.uri}`)
  })    

})

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => { return reply('Hello World') }
})

// server.start((err) => {
//   if (error) {
//     throw err
//   }

//   console.log(`Server running at: ${server.info.uri}`)
// })
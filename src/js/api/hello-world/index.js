function sayHello (request, reply) {

  reply({
    hello: request.params.name
  })

}

function register (server, options, next) {

  server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: sayHello
  })

  return next()

}

register.attributes = {
  name: 'api'
}

module.exports = register
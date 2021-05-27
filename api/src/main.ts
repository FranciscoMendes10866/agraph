import 'dotenv/config'
import Fastify, { FastifyRequest, FastifyReply } from 'fastify'
import mercurius from 'mercurius'

import schema from '@schema/index'
import authorization from '@guards/authorization'

const app = Fastify()

app.register(mercurius, {
  schema,
  graphiql: 'playground',
  context: (request: FastifyRequest, reply: FastifyReply) => ({ request, reply, auth: authorization(request) })
})

async function start (port: number) {
  try {
    await app.listen(port, () => {
      console.log(`Playground running at http://localhost:${port}/playground`)
    })
  } catch (err) {
    console.error(err)
    process.exit()
  }
}
start(4000)

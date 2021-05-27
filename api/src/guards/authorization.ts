import { FastifyRequest } from 'fastify'
import { boomify } from '@hapi/boom'
import { verify } from 'jsonwebtoken'

const { JWT_SECRET } = process.env

export default (request: FastifyRequest) => {
  const { authorization } = request.headers
  if (!authorization) {
    return null
  }
  const token = authorization.replace('Bearer', '').trim()
  try {
    const { id } = verify(token, JWT_SECRET)
    return id
  } catch (err) {
    throw boomify(err)
  }
}

import { FastifyRequest } from 'fastify'
import { boomify } from '@hapi/boom'
import { verify } from 'jsonwebtoken'

import { TokenDTO } from '@utils/token.dto'
const { JWT_SECRET } = process.env

export default (request: FastifyRequest): null | TokenDTO => {
  const { authorization } = request.headers
  if (!authorization) {
    return null
  }
  const token = authorization.replace('Bearer', '').trim()
  try {
    const decoded = verify(token, JWT_SECRET)
    const { id, username } = decoded as TokenDTO
    return { id, username }
  } catch (err) {
    throw boomify(err)
  }
}

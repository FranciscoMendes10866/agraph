import { mutationField, stringArg, nonNull } from '@nexus/schema'
import { boomify } from '@hapi/boom'
import { hash, verify } from 'argon2'
import { sign } from 'jsonwebtoken'

import { Users } from '@db/index'
import { SignUp, SignIn } from '@graphql/typeDefs/user'
const { JWT_SECRET } = process.env

const signup = mutationField('signup', {
  type: SignUp,
  args: {
    email: nonNull(stringArg()),
    password: nonNull(stringArg()),
    username: nonNull(stringArg())
  },
  resolve: async (root, { email, password, username }, ctx) => {
    try {
      const find = await Users.findOne({ email })
      if (find) {
        return null
      }
      const hashed = await hash(password)
      return await Users.insert({ password: hashed, email, username })
    } catch (err) {
      throw boomify(err)
    }
  }
})

const signin = mutationField('signin', {
  type: SignIn,
  args: {
    email: nonNull(stringArg()),
    password: nonNull(stringArg())
  },
  resolve: async (root, { email, password }, ctx) => {
    try {
      const find = await Users.findOne({ email })
      if (!find) {
        return null
      }
      const val = await verify(find.password, password)
      if (!val) {
        return null
      }
      const token = sign({ id: find._id }, JWT_SECRET)
      return { _id: find._id, username: find.username, email: find.email, token }
    } catch (err) {
      throw boomify(err)
    }
  }
})

export default [signup, signin]

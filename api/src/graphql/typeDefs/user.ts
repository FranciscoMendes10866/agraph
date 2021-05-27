import { objectType } from '@nexus/schema'

export const SignUp = objectType({
  name: 'SignUp',
  definition (t) {
    t.string('_id', { description: 'ID of the user.' })
    t.string('email', { description: 'Email of the user.' })
    t.string('password', { description: 'Password of the user.' })
    t.string('username', { description: 'Username of the user.' })
  }
})

export const SignIn = objectType({
  name: 'SignIn',
  definition (t) {
    t.string('_id', { description: 'ID of the user.' })
    t.string('email', { description: 'Email of the user.' })
    t.string('username', { description: 'Username of the user.' })
    t.string('token', { description: 'Token of the user.' })
  }
})

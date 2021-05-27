/* eslint-disable camelcase */
import { mutationField, stringArg, nonNull } from '@nexus/schema'
import { boomify } from '@hapi/boom'

import { Comments } from '@db/index'
import { Comment } from '@graphql/typeDefs/comment'

const newcomment = mutationField('newcomment', {
  type: Comment,
  args: {
    message: nonNull(stringArg()),
    post_id: nonNull(stringArg())
  },
  resolve: async (root, { message, post_id }, { auth }) => {
    try {
      return await Comments.insert({ message, post_id, commentator_id: auth.id, commentator_username: auth.username })
    } catch (err) {
      throw boomify(err)
    }
  }
})

const patchcomment = mutationField('patchcomment', {
  type: Comment,
  args: {
    id: nonNull(stringArg()),
    message: nonNull(stringArg())
  },
  resolve: async (root, { id, message }, ctx) => {
    try {
      return await Comments.findOneAndUpdate({ _id: id }, { $set: { message } })
    } catch (err) {
      throw boomify(err)
    }
  }
})

const destroycomment = mutationField('destroycomment', {
  type: Comment,
  args: {
    id: nonNull(stringArg())
  },
  resolve: async (root, { id }, ctx) => {
    try {
      return await Comments.findOneAndDelete({ _id: id })
    } catch (err) {
      throw boomify(err)
    }
  }
})

export default [newcomment, patchcomment, destroycomment]

import { stringArg, nonNull, queryField } from '@nexus/schema'
import { boomify } from '@hapi/boom'

import { Posts } from '@db/index'
import { PostComments } from '@graphql/typeDefs/comment'

const singlepost = queryField('singlepost', {
  type: PostComments,
  args: {
    id: nonNull(stringArg())
  },
  resolve: async (root, { id }, ctx) => {
    try {
      return await Posts.findOne({ _id: id })
    } catch (err) {
      throw boomify(err)
    }
  }
})

export default [singlepost]

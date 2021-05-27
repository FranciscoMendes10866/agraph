import { mutationField, stringArg, nonNull } from '@nexus/schema'
import { boomify } from '@hapi/boom'

import { Posts } from '@db/index'
import { Post } from '@graphql/typeDefs/post'

const newpost = mutationField('newpost', {
  type: Post,
  args: {
    title: nonNull(stringArg()),
    content: nonNull(stringArg())
  },
  resolve: async (root, { title, content }, { auth }) => {
    try {
      return await Posts.insert({ title, content, user_id: auth })
    } catch (err) {
      throw boomify(err)
    }
  }
})

export default [newpost]

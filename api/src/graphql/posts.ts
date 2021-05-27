import { mutationField, stringArg, nonNull, queryField, list } from '@nexus/schema'
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
      return await Posts.insert({ title, content, author_id: auth.id, author_username: auth.username })
    } catch (err) {
      throw boomify(err)
    }
  }
})

const findposts = queryField('findposts', {
  type: list(Post),
  resolve: async (root, args, ctx) => {
    try {
      return await Posts.find()
    } catch (err) {
      throw boomify(err)
    }
  }
})

const patchpost = mutationField('patchpost', {
  type: Post,
  args: {
    id: nonNull(stringArg()),
    title: nonNull(stringArg()),
    content: nonNull(stringArg())
  },
  resolve: async (root, { id, title, content }, ctx) => {
    try {
      return await Posts.findOneAndUpdate({ _id: id }, { $set: { title, content } })
    } catch (err) {
      throw boomify(err)
    }
  }
})

const destroypost = mutationField('destroypost', {
  type: Post,
  args: {
    id: nonNull(stringArg())
  },
  resolve: async (root, { id }, ctx) => {
    try {
      const data = await Posts.findOneAndDelete({ _id: id })
      return data
    } catch (err) {
      throw boomify(err)
    }
  }
})

export default [newpost, findposts, patchpost, destroypost]

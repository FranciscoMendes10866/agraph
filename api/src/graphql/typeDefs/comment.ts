import { objectType } from '@nexus/schema'

import { Comments } from '@db/index'

export const Comment = objectType({
  name: 'Comment',
  definition (t) {
    t.string('_id', { description: 'ID of the comment.' })
    t.string('message', { description: 'Message of the comment.' })
    t.string('post_id', { description: 'Post of the comment.' })
    t.string('commentator_id', { description: 'UserID of the comment.' })
    t.string('commentator_username', { description: 'User username of the comment.' })
  }
})

export const PostComments = objectType({
  name: 'PostComments',
  definition (t) {
    t.string('_id', { description: 'ID of the post.' })
    t.string('title', { description: 'Title of the post.' })
    t.string('content', { description: 'Content of the post.' })
    t.string('author_id', { description: 'Author ID of the post.' })
    t.string('author_username', { description: 'Author username of the post.' })
    t.list.field('comments', {
      type: Comment,
      resolve: async ({ _id }, args, ctx) => {
        return await Comments.find({ post_id: _id.toString() })
      }
    })
  }
})

import { objectType } from '@nexus/schema'

export const Post = objectType({
  name: 'Post',
  definition (t) {
    t.string('_id', { description: 'ID of the post.' })
    t.string('title', { description: 'Title of the post.' })
    t.string('content', { description: 'Content of the post.' })
    t.string('image', { description: 'Image of the post.' })
    t.string('author_id', { description: 'Author ID of the post.' })
    t.string('author_username', { description: 'Author username of the post.' })
  }
})

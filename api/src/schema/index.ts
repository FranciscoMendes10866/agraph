import { makeSchema } from '@nexus/schema'
import { join } from 'path'

import UserDefs from '@graphql/users'
import PostDefs from '@graphql/posts'

export default makeSchema({
  types: [UserDefs, PostDefs],
  outputs: {
    typegen: join(__dirname, 'generated', 'typegen.dto.ts'),
    schema: join(__dirname, 'generated', 'schema.gql')
  }
})

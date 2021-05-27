import { makeSchema } from '@nexus/schema'
import { join } from 'path'

import { Users, Posts, Comments, Query } from '@graphql/index'

export default makeSchema({
  types: [Users, Posts, Comments, Query],
  outputs: {
    typegen: join(__dirname, 'generated', 'typegen.dto.ts'),
    schema: join(__dirname, 'generated', 'schema.gql')
  }
})

import { makeSchema } from '@nexus/schema'
import { join } from 'path'

import UserDefs from '@graphql/users'

export default makeSchema({
  types: [UserDefs],
  outputs: {
    typegen: join(__dirname, 'generated', 'typegen.dto.ts'),
    schema: join(__dirname, 'generated', 'schema.gql')
  }
})

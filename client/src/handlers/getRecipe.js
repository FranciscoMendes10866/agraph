import { GraphQLClient, gql } from 'graphql-request'

export default async function getRecipe({ queryKey }) {
    const recipeId = queryKey[1].recipeId
    const token = queryKey[1].token

    const baseURL = 'http://localhost:4000/graphql'
    const client = new GraphQLClient(baseURL)
    client.setHeader('authorization', `Bearer ${token}`)

    const query = gql`
    query singlepost($id: String!) { 
        singlepost(id: $id) {
        title
        content
        author_id
        image
        author_username
        comments {
            _id
            message
            commentator_id
            commentator_username
        }
      }
    }
  `

    const variables = {
        id: recipeId
    }

    return await client.request(query, variables)
}

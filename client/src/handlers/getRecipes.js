import { request, gql } from 'graphql-request'

export default async function getRecipes(form) {
    const baseURL = 'http://localhost:4000/graphql'

    const query = gql`
    query {
        findposts {
            _id
            title
            description
            categories
            image
            author_username
        }
    }
  `

  return await request(baseURL, query)
}

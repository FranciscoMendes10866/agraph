import { GraphQLClient, gql } from 'graphql-request'

export default async function createRecipe(form, categories, token) {
    const baseURL = 'http://localhost:4000/graphql'
    const client = new GraphQLClient(baseURL)
    client.setHeader('authorization', `Bearer ${token}`)

    const stringified = categories.toString()

    const mutation = gql`
    mutation newpost($title: String!, $description: String!, $content: String!, $image: String!, $categories: String!) { 
        newpost(title: $title, description: $description, content: $content, image: $image, categories: $categories) {
        _id
        title
      }
    }
  `

    const variables = {
        title: form.title,
        description: form.description,
        content: form.content,
        image: form.image,
        categories: stringified
    }

    return await client.request(mutation, variables)
}

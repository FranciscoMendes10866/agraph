import { request, gql } from 'graphql-request'

export default async function signIn(form) {
    const baseURL = 'http://localhost:4000/graphql'

    const mutation = gql`
    mutation signin($email: String!, $password: String!) { 
        signin(email: $email, password: $password) {
        _id
        username
        token
      }
    }
  `

const variables = {
    email: form.email,
    password: form.password
  }

  return await request(baseURL, mutation, variables)
}

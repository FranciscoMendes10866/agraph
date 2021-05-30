import { request, gql } from 'graphql-request'

export default async function signUp(form) {
    const baseURL = 'http://localhost:4000/graphql'

    const mutation = gql`
    mutation signup($email: String!, $password: String!, $username: String!) { 
        signup(email: $email, password: $password, username: $username) {
        username
      }
    }
  `

const variables = {
    email: form.email,
    password: form.password,
    username: form.username
  }

  return await request(baseURL, mutation, variables)
}

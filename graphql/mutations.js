import { gql } from '@apollo/client';

export const SIGN_IN = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    value
  }
}
`
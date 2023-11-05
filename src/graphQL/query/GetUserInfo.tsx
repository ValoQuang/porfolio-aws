import { gql } from '@apollo/client';

export const GET_USER_INFO = gql`
  query GetUserInfo(login: $id: ID!) {
    user(login: $id) {
      repositories(first: 10) {
        nodes {
          name
          description
        }
      }
    }
  }
`;
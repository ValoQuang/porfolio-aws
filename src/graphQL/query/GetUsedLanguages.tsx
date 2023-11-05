import { gql } from '@apollo/client';

export const GET_USED_LANGUAGES = gql`
query GetUsedLanguages(login: $id: ID!) {
    user(login: $id) {
      repositories(first: 10) {
        nodes {
          name
        }
      }
    }
  }
`;
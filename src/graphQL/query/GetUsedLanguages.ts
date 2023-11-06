import { gql } from '@apollo/client';

export const GET_USED_LANGUAGES = gql`
query GetUsedLanguages {
    user(login: "ValoQuang") {
      repositories(first: 10) {
        nodes {
          name
        }
      }
    }
  }
`;
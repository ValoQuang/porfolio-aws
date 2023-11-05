import { gql } from "@apollo/client";

export const GET_CONTACT = gql`
query GetContact(login: $id: ID!) {
    user(login: $id) {
      repositories(first: 10) {
        nodes {
          
          description
        }
      }
    }
  }
`;

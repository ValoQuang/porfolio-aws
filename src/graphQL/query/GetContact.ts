import { gql } from "@apollo/client";

export const GET_CONTACT = gql`
query GetContact {
    user(login: "ValoQuang") {
      repositories(first: 5) {
        nodes {
          description
        }
      }
    }
  }
`;

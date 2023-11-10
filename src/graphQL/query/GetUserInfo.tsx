import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query GetUserInfo($login: String!) {
    user(login: $login) {    
      bio
      avatarUrl
      name
      company
      createdAt
      location
      repositories(first: 2) {
        nodes { 
          description
        }
      }
    }
  }
`;

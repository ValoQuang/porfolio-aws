import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query GetUserInfo($id: ID!) {
    user(login: $id){
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

export interface GetUserInfo {
  viewer: {
    name: string;
    bio: string;
    avatarUrl: string;
    company: string;
    location: string;
    email: string;
  };
}

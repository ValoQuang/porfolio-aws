import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query GetUserInfo {
    viewer {
      name
      bio
      avatarUrl
      company
      location
      email
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

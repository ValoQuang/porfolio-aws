import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query GetUserInfo($login: String!) {
    user(login: $login) {
      bio
      avatarUrl
      name
      login
      pronouns
      company
      createdAt
      location
      email
      followers(first: 5) {
        totalCount
      }
      following {
        totalCount
      }
      status {
        emoji
        emojiHTML
      }
    }
  }
`;

export interface User {
  avatarUrl: string;
  bio: string;
  company: string;
  login: string;
  pronouns: string;
  createdAt: string;
  email: string;
  location: string;
  name: string;
  followers: {
    totalCount: number;
  }
  following: {
    totalCount: number;
  }
  status: {
    emoji: any;
    emojiHTML: any;
  }
}

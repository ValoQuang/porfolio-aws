import { gql } from "@apollo/client";

export const SET_USER_INFO = gql`
  mutation SetUserInfo($login: String!) {
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
    emoji: string;
    emojiHTML: string;
  }
}

import { gql } from "@apollo/client";

export const UPDATE_USER_STATUS = gql`
  mutation UpdateUserStatus($input: ChangeUserStatusInput!) {
    changeUserStatus(input: $input) {
      clientMutationId
      status {
        message
        emoji
        updatedAt
        expiresAt
        ...user
      }
    }
  }
`;

export interface UpdateUserStatus {
  clientMutationId: string,
  status: {
    message: string,
    emoji: string,
    updatedAt: string,
    expiresAt: string,
  }
}

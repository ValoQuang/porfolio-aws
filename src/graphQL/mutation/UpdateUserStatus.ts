import { gql } from "@apollo/client";

export const UPDATE_USER_STATUS = gql`
  mutation UpdateUserStatus($input: ChangeUserStatusInput!) {
    changeUserStatus(input: $input) {
      clientMutationId
      status {
        message
        emoji
        indicatesLimitedAvailability
        expiresAt
      }
    }
  }
`;

export interface UpdateUserStatus {
  clientMutationId: string;
  status: {
    message: string;
    emoji: string;
    indicatesLimitedAvailability: boolean;
    expiresAt: string;
  };
}

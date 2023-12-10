import { useMutation } from "@apollo/client";
import React from "react";
import {
  UPDATE_USER_STATUS,
  UpdateUserStatus,
} from "../../../../graphQL/mutation";

const StatusModal = () => {
  const updateUserStatus = useMutation<UpdateUserStatus>(UPDATE_USER_STATUS, {
    variables: {
      input: {
        clientMutationId: `${process.env.REACT_APP_GITHUB_USER}`,
      },
    },
  });

  return (
    <div className="fixed shadow-2xl w-status h-status rounded-2xl bg-slate-700 overflow-y-auto overflow-x-hidden outline-none">
      <div className=""></div>
    </div>
  );
};

export default StatusModal;

import { useMutation } from "@apollo/client";
import {
  UPDATE_USER_STATUS,
  UpdateUserStatus,
} from "../../../../graphQL/mutation";
import { useModalStore } from "../../../../store/modalStore";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useEffect, useState } from "react";

const StatusModal = () => {
  const closeModal = useModalStore((state) => state.setModalOpen);
  const [emojiModal, setEmojiModal] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const updateUserStatus = useMutation<UpdateUserStatus>(UPDATE_USER_STATUS, {
    variables: {
      input: {
        clientMutationId: `${process.env.REACT_APP_GITHUB_USER}`,
      },
    },
  });

  useEffect(() => {}, []);

  const handleClose = () => {
    closeModal(false);
  };
  const handleEmojiPicker = () => {
    setEmojiModal(!emojiModal);
  };

  return (
    <div className="p-2 shadow-2xl transform translate-x-full translate-y-2/3 w-status h-status rounded-xl bg-slate-700 outline-none">
      <div onClick={handleClose} className="text-white">
        Edit status
      </div>
      <div className="flex leading-10">
        <span
          onClick={handleEmojiPicker}
          className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />

            {}
          </svg>
        </span>
        <div className="translate-y-30 fixed overflow-visible">
          {emojiModal && (
            <Picker
              perLine={12}
              emojiSize={20}
              data={data}
             
            />
          )}
        </div>
        <input
          type="text"
          placeholder="What's your status ?"
          className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default StatusModal;

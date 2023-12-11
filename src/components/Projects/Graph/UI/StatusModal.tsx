import { useMutation } from "@apollo/client";
import {
  UPDATE_USER_STATUS,
  UpdateUserStatus,
} from "../../../../graphQL/mutation";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useEffect, useState } from "react";

const StatusModal = ({ isOpen, onClose }: any) => {
  const [emojiModal, setEmojiModal] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null || "-");

  const updateUserStatus = useMutation<UpdateUserStatus>(UPDATE_USER_STATUS, {
    variables: {
      input: {
        clientMutationId: `${process.env.REACT_APP_GITHUB_USER}`,
      },
    },
  });

  useEffect(() => {}, [chosenEmoji]);
  if (!isOpen) return null;

  const handleEmojiSelect = (emojiCode: any) => {
    setChosenEmoji(emojiCode.native);
    setEmojiModal(!emojiModal);
  };
  const handleEmojiPicker = () => {
    setEmojiModal(!emojiModal);
  };

  return (
    <div className="responsive p-4 shadow-2xl fixed top-48 left-1/3 w-status h-status rounded-xl bg-slate-700 outline-none">
      <div className="flex justify-between text-white text-20">
        <div>Edit status</div>
        <button className="hover:text-zinc-600" onClick={onClose}>
          Close Modal
        </button>
      </div>
      <div className="flex leading-10">
        <span
          onClick={handleEmojiPicker}
          className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
        >
          {chosenEmoji}
        </span>
        <div className="translate-y-12 fixed">
          {emojiModal && (
            <Picker
              perLine={12}
              emojiSize={20}
              data={data}
              onEmojiSelect={handleEmojiSelect}
            />
          )}
        </div>
        <input
          type="text"
          placeholder="What's your status ?"
          className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900  flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
      </div>
    </div>
  );
};

export default StatusModal;

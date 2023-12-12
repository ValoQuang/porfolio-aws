import { useMutation } from "@apollo/client";
import {
  UPDATE_USER_STATUS,
  UpdateUserStatus,
} from "../../../../graphQL/mutation";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import { SubmitProp, StatusModal } from "../../../../types/graphType";
import Emoji from "react-emoji-render";

const EditModal = ({ isOpen, onClose, fetchedStatus }: StatusModal) => {
  const [emojiModal, setEmojiModal] = useState(false);
  const initialState = {
    message: "",
    emoji: "",
    emojiHTML: "",
    indicatesLimitedAvailability: false,
    expiresAt: null,
  };

  const [status, setStatus] = useState(initialState);
  const [updateUserStatus] = useMutation<UpdateUserStatus>(UPDATE_USER_STATUS, {
    variables: {
      input: {
        clientMutationId: `${process.env.REACT_APP_GITHUB_USER}`,
      },
    },
  });

  useEffect(() => {
    if (fetchedStatus) {
      setStatus(fetchedStatus);
    }
  }, [fetchedStatus, status]);

  const handleInputChange = useCallback(
    (input: SetStateAction<SubmitProp>) => setStatus(input),
    []
  );
  if (!isOpen) return null;

  const onClosePicker = (emojiCode: any) => {
    setStatus({ ...status, emoji: emojiCode.native });
    setEmojiModal(!emojiModal);
  };
  const onOpenPicker = () => {
    setEmojiModal(!emojiModal);
  };

  const onSubmit = () => {
    //the query and mutation has different input name
    updateUserStatus({
      variables: {
        input: {
          message: status.message,
          emoji: status.emoji,
          limitedAvailability: status.indicatesLimitedAvailability,
          expiresAt: status.expiresAt,
        },
      },
    });
    setEmojiModal(!emojiModal);
  };

  const onClear = () => {
    updateUserStatus({
      variables: {
        input: {
          message: initialState.message,
          emoji: initialState.emoji,
          limitedAvailability: initialState.indicatesLimitedAvailability,
          expiresAt: initialState.expiresAt,
        },
      },
    });
    setEmojiModal(!emojiModal);
  };

  return (
    <div className="p-4 shadow-2xl fixed top-48 left-1/3 w-status h-status rounded-xl bg-slate-700 outline-none">
      <div className="flex justify-between text-white text-20">
        <div>Edit status</div>
        <button className="hover:text-zinc-600" onClick={onClose}>
          Close Modal
        </button>
      </div>
      <div className="flex leading-10">
        <span
          onClick={onOpenPicker}
          className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
        >
          <Emoji text={status.emoji || "-"} />
        </span>
        <div className="translate-y-12 fixed">
          {emojiModal && (
            <Picker
              perLine={12}
              emojiSize={20}
              data={data}
              onEmojiSelect={onClosePicker}
            />
          )}
        </div>
        <input
          type="text"
          placeholder="What's your status ?"
          defaultValue={status.message}
          onChange={(e) =>
            handleInputChange({
              ...status,
              message: e.target.value,
            })
          }
          className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900  flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
      </div>
      <div className="flex-col">
        <input
          checked={status.indicatesLimitedAvailability}
          id="checked-checkbox"
          type="checkbox"
          onClick={(e) =>
            handleInputChange({
              ...status,
              indicatesLimitedAvailability:
                !status.indicatesLimitedAvailability,
            })
          }
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          When others mention you, assign you, or request your review, GitHub
          will let them know that you have limited availability.
        </label>
      </div>

      <div className="flex justify-between">
        <button className="solid-button" onClick={() => onSubmit()}>
          Save
        </button>
        <button className="solid-button" onClick={() => onClear()}>
          Clear status
        </button>
      </div>
    </div>
  );
};

export default EditModal;

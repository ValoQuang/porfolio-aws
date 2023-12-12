import { useMutation } from "@apollo/client";
import {
  UPDATE_USER_STATUS,
  UpdateUserStatus,
} from "../../../../../graphQL/mutation";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import { SubmitProp, StatusModal, GRAPH_BUTTON } from "../../../../../types";
import Emoji from "react-emoji-render";
import GraphButton from "../Button/GraphButton";
import GraphInput from "../Input/GraphInput";

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
    onCompleted: () => {
      onClose();
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

  const onClosePicker = (emojiCode: { native: any }) => {
    setStatus({ ...status, emoji: emojiCode.native });
    setEmojiModal(!emojiModal);
  };
  const onOpenPicker = () => {
    setEmojiModal(!emojiModal);
  };

  const onSubmit = () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  const onClear = () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 shadow-2xl fixed top-48 left-1/3 w-status h-status rounded-xl bg-slate-700 outline-none">
      <div className="flex justify-between text-white text-20">
        <div>Edit status</div>
        <button className="hover:text-zinc-600" onClick={onClose}>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex mt-5">
        <span
          onClick={onOpenPicker}
          className="hover:bg-slate-100 focus:ring-zinc-600 border-zinc-400 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
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
        
        <GraphInput
          placeholder="What's your status ?"
          defaultValue={status.message}
          onChange={(e) =>
            handleInputChange({
              ...status,
              message: e.target.value,
            })
          }
        />
      </div>
      <div className="mt-5">
        <input
          checked={status.indicatesLimitedAvailability}
          type="checkbox"
          onChange={(e) =>
            handleInputChange({
              ...status,
              indicatesLimitedAvailability:
                !status.indicatesLimitedAvailability,
            })
          }
          className="w-4 h-4 accent-gray-300 border-gray-300 rounded"
        />
        <label className="text-white text-20 ml-[10px]">Busy</label>

        <div className=" text-xs font-medium text-gray-900 dark:text-gray-300">
          When others mention you, assign you, or request your review, GitHub
          will let them know that you have limited availability.
        </div>
      </div>

      <div className="flex justify-between mt-24">
        <GraphButton title={GRAPH_BUTTON.SAVE} onClick={() => onSubmit()} />
        <GraphButton
          title={GRAPH_BUTTON.CLEAR_STATUS}
          onClick={() => onClear()}
        />
      </div>
    </div>
  );
};

export default EditModal;

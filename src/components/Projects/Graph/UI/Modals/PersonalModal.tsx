import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { GRAPH_BUTTON, PersonalModalProp } from "../../../../../types";
import GraphButton from "../Button/GraphButton";
import GraphInput from "../Input/GraphInput";
import { User } from "../../../../../graphQL/query";

const PersonalModal = ({ data, onClose }: PersonalModalProp) => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState<User>(data);

  useEffect(() => {
    if (data) {
      setInfo(data);
    }
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [data]);

  const handleChangeInfo = useCallback(
    (input: SetStateAction<User>) => setInfo(input),
    []
  );

  const onSubmit = async () => {
    try {
      //Graphql does not have mutation for user personal
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 shadow-2xl rounded-xl bg-slate-700 outline-none w-auto mt-5">
      <div className="flex-col">
        <GraphInput
          defaultValue={info?.name}
          placeholder="Name"
          onChange={(key) =>
            handleChangeInfo({
              ...info,
              name: key.target.value,
            })
          }
          firstInputRef={firstInputRef}
          label="Name"
        />

        <GraphInput
          defaultValue={info?.bio}
          placeholder="Bio"
          onChange={(key) =>
            handleChangeInfo({
              ...info,
              bio: key.target.value,
            })
          }
          label="Bio"
        />
        <GraphInput
          defaultValue={info?.pronouns}
          placeholder="Custom pronouns"
          onChange={(key) =>
            handleChangeInfo({
              ...info,
              pronouns: key.target.value,
            })
          }
          label="Custom pronouns"
        />
        <GraphInput
          defaultValue={info?.company}
          placeholder="Company"
          onChange={(key) =>
            handleChangeInfo({
              ...info,
              company: key.target.value,
            })
          }
          label="Company"
        />
        <GraphInput
          defaultValue={data?.location}
          placeholder="Location"
          onChange={(key) =>
            handleChangeInfo({
              ...info,
              location: key.target.value,
            })
          }
          label="Location"
        />
      </div>
      <div className="flex justify-between mt-24 text-sm">
        <GraphButton title={GRAPH_BUTTON.SAVE} onClick={onSubmit} />
        <GraphButton title={GRAPH_BUTTON.CLOSE} onClick={onClose} />
      </div>
    </div>
  );
};

export default PersonalModal;

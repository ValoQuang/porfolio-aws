import { useEffect, useRef, useState } from "react";
import {
  GRAPH_BUTTON,
  PersonalModalProp,
  UserObjectProp,
} from "../../../../../types";
import GraphButton from "../Button/GraphButton";
import GraphInput from "../Input/GraphInput";

const PersonalModal = ({ data, onClose }: PersonalModalProp) => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState<UserObjectProp>(data);

  useEffect(() => {
    if (data) {
      setInfo(data);
    }
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [data]);

  const onSubmit = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 shadow-2xl rounded-xl bg-slate-700 outline-none w-auto mt-5">
      <div className="flex-col">
        <GraphInput
          defaultValue={info?.user.name}
          placeholder="Name"
          onChange={() => console.log()}
          firstInputRef={firstInputRef}
          label="Name"
        />

        <GraphInput
          defaultValue={info?.user.bio}
          placeholder="Bio"
          onChange={() => console.log()}
          label="Bio"
        />
        <GraphInput
          defaultValue={info?.user.pronouns}
          placeholder="Custom pronouns"
          onChange={() => console.log()}
          label="Custom pronouns"
        />
        <GraphInput
          defaultValue={info?.user.company}
          placeholder="Company"
          onChange={() => console.log()}
          label="Company"
        />
        <GraphInput
          defaultValue={data?.user.location}
          placeholder="Location"
          onChange={() => console.log()}
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

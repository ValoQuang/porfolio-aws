import { useEffect, useRef, useState } from "react";
import { GRAPH_BUTTON, UserObjectProp } from "../../../../../types";
import GraphButton from "../Button/GraphButton";
import GraphInput from "../Input/GraphInput";

type Form = {
  data: any;
  onClose: any;
};

const FormModal = ({ data, onClose }: Form) => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState<UserObjectProp>(data as any);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
    if (data) {
      setInfo(data);
    }
  }, [data]);

  return (
    <div className="p-4 shadow-2xl rounded-xl bg-slate-700 outline-none w-auto mt-5">
      <div className="flex-col mb-10 space-y-4">
        <GraphInput
          defaultValue={info?.user.name}
          placeholder="Name"
          onChange={() => console.log()}
          firstInputRef={firstInputRef}
        />

        <GraphInput
          defaultValue={info?.user.bio}
          placeholder="Bio"
          onChange={() => console.log()}
        />
        <GraphInput
          defaultValue={info?.user.pronouns}
          placeholder="Pronouns"
          onChange={() => console.log()}
        />
        <GraphInput
          defaultValue={info?.user.company}
          placeholder="Company"
          onChange={() => console.log()}
        />
        <GraphInput
          defaultValue={data?.user.location}
          placeholder="Location"
          onChange={() => console.log()}
        />
      </div>
      <div className="flex justify-between mt-24 text-sm">
        <GraphButton title={GRAPH_BUTTON.SAVE} onClick={() => console.log()} />
        <GraphButton title={GRAPH_BUTTON.CLOSE} onClick={onClose} />
      </div>
    </div>
  );
};

export default FormModal;

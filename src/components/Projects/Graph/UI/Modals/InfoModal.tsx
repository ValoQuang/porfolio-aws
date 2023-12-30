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
import { Octokit } from "octokit"; //Client for github rest api
import { User } from "../../../../../graphQL/query";

const PersonalModal = ({ data, onClose, refetch }: PersonalModalProp) => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });
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

  const { name, bio, pronouns, location, email, company } = info;
  const requestOptions = {
    method: "PATCH",
    url: "/user",
    data: {
      name,
      bio,
      location,
      company,
      email,
      pronouns,
    },
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  };

  const onSubmit = async () => {
    try {
      await octokit.request(requestOptions);
      onClose();
      refetch();
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
          defaultValue={info?.email}
          placeholder="Email"
          onChange={(key) =>
            handleChangeInfo({
              ...info,
              email: key.target.value,
            })
          }
          label="Email"
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

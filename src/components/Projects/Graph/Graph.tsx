import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Emoji from "react-emoji-render";
import { GET_USER_INFO, User } from "../../../graphQL/query";
import { Body } from "../../Skeleton";
import Profile from "./Profile";
import { useModalStore } from "../../../store/modalStore";
import StatusModal from "./UI/StatusModal";

interface UserObjectProp {
  user: User;
}

const Graph = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [form, setForm] = useState(false);
  const [info, setInfo] = useState<UserObjectProp>();
  const { data, loading, error } = useQuery(GET_USER_INFO, {
    variables: {
      login: `${process.env.REACT_APP_GITHUB_USER}`,
    },
    skip: isDataLoaded,
    fetchPolicy: "cache-first",
  });
  const [setModalOpen, isModalOpen] = useModalStore((state) => [
    state.setModalOpen,
    state.isModalOpen,
  ]);

  const handleEdit = () => {
    setForm(!form);
  };

  useEffect(() => {
    if (data && !loading && !error) {
      setIsDataLoaded(true);
      setInfo(data);
    }
  }, [data, error, loading]);

  const handleStatus = () => {
    setModalOpen(!isModalOpen);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isModalOpen && (
        <div className="z-40 fixed flex bg-opacity-25 bg-zinc-400 w-screen h-screen">
          <StatusModal />
        </div>
      )}
      <Body
        children={
          <div className="rounded-3xl flex leading-10 bg-graph p-5 text-white">
            <div className="w-3/12 mr-10">
              <div className="relative align-bottom">
                <img
                  className="rounded-full w-fit h-fit"
                  src={info?.user.avatarUrl}
                  alt="alt me"
                />

                {info?.user?.status && (
                  <button
                    onClick={handleStatus}
                    className="bg-zinc-700 absolute bottom-10 right-2 rounded-full px-3 hover:bg-zinc-600"
                  >
                    <Emoji text={info.user.status.emoji} />
                  </button>
                )}
              </div>
              <div>{info?.user.name}</div>
              <div className="text-sm w-full">{info?.user.bio}</div>

              <div className="flex justify-start gap-5">
                <div>{info?.user.login}</div>
                <div className="text-slate-400">{info?.user.pronouns}</div>
              </div>

              <button
                className=" text-sm solid-button w-full hover:bg-slate-100"
                onClick={handleEdit}
              >
                Edit profile
              </button>
              {form && <div>FORM</div>}
              <p>{info?.user.email}</p>
              <div>
                {info?.user.followers.totalCount} follower{" "}
                {info?.user.following.totalCount} following
              </div>

              <div>{info?.user.company}</div>
              <div>{info?.user.location}</div>
            </div>
            <div className="w-9/12 ml-10">{<Profile />}</div>
          </div>
        }
      />
    </>
  );
};

export default Graph;

import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Emoji from "react-emoji-render";
import { GET_USER_INFO, User } from "../../../graphQL/query";
import { Body } from "../../Skeleton";
import Profile from "./Profile";
import StatusModal from "./UI/StatusModal";

interface UserObjectProp {
  user: User;
}

const Graph = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [form, setForm] = useState(false);
  const [info, setInfo] = useState<UserObjectProp>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, loading, error } = useQuery(GET_USER_INFO, {
    variables: {
      login: `${process.env.REACT_APP_GITHUB_USER}`,
    },
    skip: isDataLoaded,
    fetchPolicy: "cache-first",
  });

  const handleEdit = () => {
    setForm(!form);
  };

  useEffect(() => {
    if (data && !loading && !error) {
      setIsDataLoaded(true);
      setInfo(data);
    }
  }, [data, error, info?.user, loading]);

  const openModal = () => {
    setIsModalOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isModalOpen && <StatusModal isOpen={isModalOpen} onClose={closeModal} />}
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
                    onClick={openModal}
                    className="bg-zinc-700 absolute bottom-10 right-2 rounded-full w-8 h-8 hover:bg-zinc-600 flex items-center justify-center"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: info.user.status.emojiHTML,
                      }}
                    />
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

import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Emoji from "react-emoji-render";
import { GET_USER_INFO, User } from "../../../graphQL/query";
import { Body } from "../../Skeleton";
import {
  getFromLocalStorage,
  setInLocalStorage,
} from "../../../utils/localStorage";
import { LOCAL_STORAGE } from "../../../types/localStorageEnum";
import Readme from "./Readme";

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

  const handleEdit = () => {
    setForm(!form);
  };

  useEffect(() => {
    if (
      data &&
      !loading &&
      !error &&
      !getFromLocalStorage(LOCAL_STORAGE.USER)
    ) {
      setIsDataLoaded(true);
      setInLocalStorage(LOCAL_STORAGE.USER, JSON.stringify(data));
    }

    if (getFromLocalStorage(LOCAL_STORAGE.USER)) {
      setInfo(JSON.parse(getFromLocalStorage(LOCAL_STORAGE.USER)));
    }
  }, [data, error, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Body
        children={
          <div className="z-0 flex leading-10 bg-graph p-5 text-white rounded-3xl">
            <div className="w-3/12 mr-10">
              <div className="relative align-bottom">
                <img
                  className="rounded-full w-fit h-fit"
                  src={info?.user.avatarUrl}
                  alt="alt me"
                />

                {info?.user.status.emoji && (
                  <button className="bg-zinc-700 absolute bottom-10 right-2 rounded-full px-3">
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
            <div className="w-9/12 ml-10">{<Readme />}</div>
          </div>
        }
      />
    </>
  );
};

export default Graph;

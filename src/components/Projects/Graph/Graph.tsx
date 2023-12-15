import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "../../../graphQL/query";
import { Body } from "../../Skeleton";
import GraphProfile from "./GraphProfile";
import StatusModal from "./UI/Modals/StatusModal";
import { UserObjectProp, GRAPH_BUTTON, GRAPH_MODALS } from "../../../types";
import GraphButton from "./UI/Button/GraphButton";
import PersonalModal from "./UI/Modals/PersonalModal";
import { useModalStore } from "../../../store/modalStore";

const Graph = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [info, setInfo] = useState<UserObjectProp>();
  const [isStatusOpen, isPersonalOpen, setModalState] = useModalStore(
    (state) => [state.isStatusOpen, state.isPersonalOpen, state.setModalState]
  );

  const { data, loading, error } = useQuery(GET_USER_INFO, {
    variables: {
      login: `${process.env.REACT_APP_GITHUB_USER}`,
    },
    skip: isDataLoaded,
    fetchPolicy: "cache-first",
  });

  const openPersonalModal = () => {
    setModalState(GRAPH_MODALS.PERSONAL);
  };

  useEffect(() => {
    if (data && !loading && !error) {
      setIsDataLoaded(true);
      setInfo(data);
    }
  }, [isDataLoaded, data, error, info, loading, isStatusOpen]);

  const openStatusModal = () => {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
    setModalState(GRAPH_MODALS.STATUS);
  };
  const closeStatusModal = () => {
    setModalState(GRAPH_MODALS.STATUS);
    document.body.style.overflowY = "auto";
  };

  const closePersonalModal = () => {
    setModalState(GRAPH_MODALS.PERSONAL);
    document.body.style.overflowY = "auto";
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <StatusModal
        isOpen={isStatusOpen}
        fetchedStatus={data?.user?.status}
        onClose={closeStatusModal}
      />
      <Body
        children={
          <div
            className={`${
              isStatusOpen && "bg-opacity-50 pointer-events-none"
            } rounded-3xl flex leading-10 bg-graph text-white`}
          >
            <div className="rounded-3xl flex bg-graph p-5 text-white">
              <div className="w-3/12 mr-10">
                <div className={`relative ${isStatusOpen && "opacity-50"}`}>
                  <img
                    className="rounded-full w-fit h-fit"
                    src={info?.user.avatarUrl}
                    alt="alt me"
                  />
                  <button
                    onClick={openStatusModal}
                    className={`${
                      (isStatusOpen && "disabled pointer-events-none") ||
                      (info?.user.status! !==
                        null && info?.user.status.indicatesLimitedAvailability
                        ? "border-2 border-[#e46e13]"
                        : "")
                    } bg-zinc-700 absolute bottom-10 right-2 rounded-full w-8 h-8 hover:bg-zinc-600 flex items-center justify-center `}
                  >
                    {info?.user?.status ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: info?.user.status.emojiHTML,
                        }}
                      />
                    ) : (
                      "-"
                    )}
                  </button>
                </div>

                {!isPersonalOpen ? (
                  <div className="flex-col space-y-4">
                    <div className="text-3xl">{info?.user.name}</div>
                    <div className="text-sm w-full">{info?.user.bio}</div>
                    <div className="text-sm flex justify-start gap-5 leading-10">
                      <div>{info?.user.login}</div>
                      <div className="text-slate-400">
                        {info?.user.pronouns}
                      </div>
                    </div>{" "}
                    <GraphButton
                      title={GRAPH_BUTTON.EDIT_PROFILE}
                      onClick={openPersonalModal}
                    />
                    <p>{info?.user.email}</p>
                    <div>
                      {info?.user.followers.totalCount} follower{" "}
                      {info?.user.following.totalCount} following
                    </div>
                    <div>{info?.user.company}</div>
                    <div>{info?.user.location}</div>
                  </div>
                ) : (
                  <div className={`${isStatusOpen && "opacity-50"}`}>
                    <PersonalModal data={info!} onClose={closePersonalModal} />
                  </div>
                )}
              </div>
              <div className="w-9/12 ml-10">{<GraphProfile />}</div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default Graph;

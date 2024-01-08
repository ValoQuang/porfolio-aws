import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_USED_LANGUAGE,
  LanguageNodeArray,
  UsedLanguages,
} from "../../../../../graphQL/query";
import ProjectDetailModal from "../Modals/ProjectDetailModal";

const computerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fill-rule="evenodd"
      d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
      clip-rule="evenodd"
    />
  </svg>
);

const openIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
  </svg>
);

const GraphChart = () => {
  const [result, setResult] = useState<LanguageNodeArray>([]);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const { loading, data } = useQuery<UsedLanguages>(GET_USED_LANGUAGE, {
    variables: {
      login: process.env.REACT_APP_GITHUB_USER,
    },
  });

  useEffect(() => {
    if (data && !loading) {
      setResult(data.user.repositories.nodes as unknown as LanguageNodeArray);
    }
  }, [data, loading, result]);

  if (loading) {
    return <>Loading ...</>;
  }

  //t is because getBoundingClientRect() gets values with respect to the window(only the current visible portion of the page), not the document(whole page).
  //Hence, it also takes scrolling into account when calculating its values
  //Basically, document = window + scroll

  const openDetailHandler = (e: any) => {
    const buttonRect = e.target.getBoundingClientRect();
    setIsOpenDetail(!isOpenDetail);
    setPosition({
      top: buttonRect.top + window.scrollY,
      left: buttonRect.left + window.scrollX,
    });
  };

  return (
    <>
      {isOpenDetail && (
        <ProjectDetailModal top={position.top} left={position.left} />
      )}

      <div className="flex flex-wrap gap-x-8 gap-y-3 ">
        {result.slice(1).map((name, index) => (
          <div key={index}>
            <div className="solid-button w-96">
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2">
                  {computerIcon}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://github.com/${process.env.REACT_APP_GITHUB_USER}/${name.name}`}
                    className="hover:cursor-pointer after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-20 after:scale-x-0 after:hover:scale-x-125 after:transition after:duration-300 after:origin-left"
                  >
                    {name.name}
                  </a>
                </div>
                <button
                  onClick={openDetailHandler}
                  className="rounded-md hover:text-orange-400"
                >
                  {openIcon}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div
                  style={{
                    background: `${name.languages.edges[0]?.node?.color.replace(
                      /["']/g,
                      ""
                    )}`,
                  }}
                  className="w-3 h-3 rounded-full"
                ></div>
                <p>{name.languages.edges[0].node.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GraphChart;

import React, { ReactNode } from "react";
import { getBackgroundClass } from "../../utils/getBackgroundClass";
import { useDisplayStore } from "../../store/displayStore";
import WeatherBackground from "../Weather/WeatherBackground";

const Body = ({
  childrenLeft,
  childrenRight,
}: {
  childrenLeft: ReactNode;
  childrenRight: ReactNode;
}) => {
  const isDarkMode = useDisplayStore((state) => state.lightMode);

  return (
    <>
      <div
        className={`${getBackgroundClass(
          isDarkMode
        )} flex p-main w-full font-ibm-plex-mono`}
      >
        <div className="">
        <WeatherBackground />
      </div>
        <div className="fixed">
          <div className="w-7/12">{childrenLeft}</div>
          <div className="w-3/12 pl-20">{childrenRight}</div>
        </div>
      </div>
    </>
  );
};

export default Body;

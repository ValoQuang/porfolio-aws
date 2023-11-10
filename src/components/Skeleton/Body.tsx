import React, { ReactNode } from "react";
import { getBackgroundClass } from "../../utils/getBackgroundClass";
import { useDisplayStore } from "../../store/displayStore";

const Body = ({
  childrenLeft,
  childrenRight,
}: {
  childrenLeft: ReactNode;
  childrenRight?: ReactNode;
}) => {
  const isDarkMode = useDisplayStore((state) => state.lightMode);

  return (
    <>
      <div
        className={`${getBackgroundClass(
          isDarkMode
        )} flex p-main w-full font-ibm-plex-mono`}
      >
        <div className="w-6/12">{childrenLeft}</div>
        <div className="w-6/12">{childrenRight}</div>
      </div>
    </>
  );
};

export default Body;

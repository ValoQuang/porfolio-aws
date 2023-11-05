import React, { ReactNode } from "react";
import { getBackgroundClass } from "../../utils/getBackgroundClass";
import { useDisplayStore } from "../../store/displayStore";
const Body = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useDisplayStore((state) => state.lightMode);

  return (
    <div
      className={`${getBackgroundClass(
        isDarkMode
      )} flex p-main w-full font-ibm-plex-mono`}
    >
      {children}
    </div>
  );
};

export default Body;

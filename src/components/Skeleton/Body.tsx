import { ReactNode } from "react";
import { getBackgroundClass } from "../../utils/getBackgroundClass";
import { useDisplayStore } from "../../store/displayStore";

interface BodyProp {
  children: ReactNode;
}

const Body = ({ children }: BodyProp) => {
  const isDarkMode = useDisplayStore((state) => state.darkMode);

  return (
    <>
      <div
        className={`${getBackgroundClass(
          isDarkMode
        )} flex-col p-main w-full font-ibm-plex-mono`}
      >
        {children}
      </div>
    </>
  );
};

export default Body;

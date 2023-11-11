import { ReactNode } from "react";
import { getBackgroundClass } from "../../utils/getBackgroundClass";
import { useDisplayStore } from "../../store/displayStore";

interface BodyProp {
  childrenLeft: ReactNode;
  childrenRight?: ReactNode;
}

const Body = ({
  childrenLeft,
  childrenRight,
}: BodyProp) => {
  const isDarkMode = useDisplayStore((state) => state.darkMode);

  return (
    <>
      <div
        className={`${getBackgroundClass(
          isDarkMode
        )} flex p-main w-full font-ibm-plex-mono`}
      >
        <div className="w-7/12">{childrenLeft}</div>
        <div className="w-4/12 pl-20">{childrenRight}</div>
      </div>
    </>
  );
};

export default Body;

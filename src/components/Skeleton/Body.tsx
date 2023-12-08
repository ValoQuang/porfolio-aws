import { ReactNode } from "react";
import { getBackgroundClass } from "../../utils/getBackgroundClass";
import { useDisplayStore } from "../../store/displayStore";

interface BodyProp {
  componentLeft: ReactNode;
  componentRight?: ReactNode;
}

const Body = ({
  componentLeft,
  componentRight,
}: BodyProp) => {
  const isDarkMode = useDisplayStore((state) => state.darkMode);

  return (
    <>
      <div
        className={`${getBackgroundClass(
          isDarkMode
        )} flex p-main w-full font-ibm-plex-mono`}
      >
        <div className="w-7/12">{componentLeft}</div>
        <div className="w-5/12 pl-20">{componentRight}</div>
      </div>
    </>
  );
};

export default Body;

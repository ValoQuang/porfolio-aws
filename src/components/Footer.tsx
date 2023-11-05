import { useDisplayStore } from "../store/displayStore";
import { getBackgroundClass } from "../utils/getBackgroundClass";

const Footer = () => {
  const isDarkMode = useDisplayStore((state) => state.lightMode);

  return (
    <div
    className={`${getBackgroundClass(
      isDarkMode
    )} flex w-full p-footer font-ibm-plex-mono`}
    >
      getCoordinate
    </div>
  );
};

export default Footer;

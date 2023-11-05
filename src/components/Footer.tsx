import { useDisplayStore } from "../store/displayStore";
import { getBackgroundClass } from "../utils/getBackgroundClass";

const Footer = () => {
  const { isDarkMode } = useDisplayStore();

  return (
    <div
    className={` ${getBackgroundClass(
        isDarkMode
      )} flex justify-between w-full p-footer font-ibm-plex-mono`}
    >
      <p className="text-1xl">Footer</p>
    </div>
  );
};

export default Footer;

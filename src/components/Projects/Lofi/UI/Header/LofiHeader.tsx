import { useNavigate } from "react-router-dom";
import DarkLightSwitch from "../Button/LofiDayButton";

const LofiHeader = () => {
  const logoImagePath = "/assets/icons/lofi-logo.gif";
  const infoIconPath = "/assets/icons/info-solid.svg";
  const githubIconPath = "/assets/icons/github.svg";
  const expandIconPath = "/assets/icons/expand.svg";
  const loginIconPath = "/assets/icons/login.svg";

  const fullScreenButtonHandler = () => {
    const element = document.getElementById("lofi-video");
    if (element) {
      if (element?.requestFullscreen) {
        element.requestFullscreen();
      } else {
        console.error("Element with id 'full-screen' not found");
      }
    }
  };

  return (
    <div className="absolute z-[1] w-[80%] flex items-center text-sm text-white justify-between overflow-hidden">
      <div>
        <img
          className="h-20 w-48 hover:cursor-pointer"
          src={logoImagePath}
          alt="Lofi Logo"
        />
      </div>

      <div className="flex w-[230px]">
        <div className="flex items-center gap-10">
          <LinkWithIcon
            icon={infoIconPath}
            text="How it works"
            url="https://github.com/ValoQuang"
          />
          <LinkWithIcon
            icon={githubIconPath}
            text="GitHub"
            url="https://github.com/ValoQuang"
          />
        </div>
      </div>
      <div className=" flex justify-end gap-3 items-center w-24 hover:cursor-pointer">
        <DarkLightSwitch />
        <img
          onClick={fullScreenButtonHandler}
          className="h-4 w-4"
          src={expandIconPath}
          alt="Expand Icon"
        />
      </div>

      <div className="lofi-container p-[5px] justify-center flex">
        <LinkWithIcon
          icon={loginIconPath}
          text="Login"
          url="https://github.com/ValoQuang"
        />
      </div>
    </div>
  );
};

interface linkWithIcon {
  icon: string;
  text: string;
  url: string;
}

const LinkWithIcon = ({ icon, text, url }: linkWithIcon) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex gap-[5px] w-32"
      onClick={() => navigate(url)}
    >
      <img className="h-5 w-5" src={icon} alt={`${text} Icon`} />
      <span className="hover:cursor-pointer after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-20 after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-left">
        {text}
      </span>
    </div>
  );
};

export default LofiHeader;

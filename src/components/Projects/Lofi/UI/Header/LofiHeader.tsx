import DarkLightSwitch from "../Button/LofiDayButton";

const LofiHeader = () => {
  const logoImagePath = "/assets/icons/lofi-logo.gif";
  const infoIconPath = "/assets/icons/info-solid.svg";
  const githubIconPath = "/assets/icons/github.svg";
  const expandIconPath = "/assets/icons/expand.svg";

  return (
    <div className="absolute z-[1] flex items-center text-sm gap-24 text-white justify-around">
      <div>
        <img
          className="h-20 w-48 hover:cursor-pointer"
          src={logoImagePath}
          alt="Lofi Logo"
        />
      </div>

      <div className="flex justify-between w-[500px]">
        <div className="flex items-center gap-8">
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

        <div className="flex items-center w-12 gap-6 hover:cursor-pointer">
          <DarkLightSwitch />
          <img className="h-4 w-4" src={expandIconPath} alt="Expand Icon" />
        </div>
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
  function redirect(prop: string) {
    window.location.replace(prop);
  }
  return (
    <div
      className="flex align-middle items-center gap-[3px]"
      onClick={() => redirect(url)}
    >
      <img className="h-4 w-4" src={icon} alt={`${text} Icon`} />
      <span className="hover:cursor-pointer block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-28 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
        {text}
      </span>
    </div>
  );
};

export default LofiHeader;

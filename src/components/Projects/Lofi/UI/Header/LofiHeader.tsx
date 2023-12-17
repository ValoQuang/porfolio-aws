import React from "react";
import { useNavigate } from "react-router-dom";
import DarkLightSwitch from "../DarkLightSwitch/DarkLightSwitch";

const LofiHeader = () => {
  const navigate = useNavigate();
  const logoImagePath = "/assets/icons/lofi-logo.gif";
  const infoIconPath = "/assets/icons/info-solid.svg";
  const githubIconPath = "/assets/icons/github.svg";
  const expandIconPath = "/assets/icons/expand.svg";

  return (
    <div className="flex items-center text-sm gap-24 text-white justify-around">
      <div>
        <img
          className="h-20 w-48 hover:cursor-pointer"
          src={logoImagePath}
          alt="Lofi Logo"
        />
      </div>

      <div className="flex justify-between w-[500px]">
        <div className="flex items-center gap-8">
          <LinkWithIcon icon={infoIconPath} text="How it works" />
          <LinkWithIcon icon={githubIconPath} text="GitHub" />
        </div>

        <div className="flex items-center w-12 gap-6 hover:cursor-pointer">
          <DarkLightSwitch />
          <img className="h-4 w-4" src={expandIconPath} alt="Expand Icon" />
        </div>
      </div>
    </div>
  );
};

const LinkWithIcon = ({ icon, text }: any) => (
  <div className="flex align-middle items-center gap-[3px]">
    <img className="h-4 w-4" src={icon} alt={`${text} Icon`} />
    <span className="hover:cursor-pointer block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-28 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
      {text}
    </span>
  </div>
);

export default LofiHeader;

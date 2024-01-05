import { useLocation, useNavigate } from "react-router-dom";
import DarkLightSwitch from "../Button/LofiDayButton";
import { LOCAL_STORAGE, LOFI_ENDPOINT, PATH_ENUM } from "../../../../../types";
import { useEffect, useState } from "react";
import { UseFetch } from "../../../../../utils/useFetch";
import { getFromLocalStorage, removeFromLocalStorage } from "../../../../../utils/localStorage";

export const ICON_PATHS = {
  logo: "/assets/icons/lofi-logo.gif",
  info: "/assets/icons/info-solid.svg",
  github: "/assets/icons/github.svg",
  expand: "/assets/icons/expand.svg",
  login: "/assets/icons/login.svg",
};

const userState = {
  username: "",
  userId: "",
  email: ",",
};

const LofiHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(userState);

  const fullScreenButtonHandler = async () => {
    const element = document.getElementById("lofi-video");
    if (element) {
      try {
        const { fullScreenHandler } = await import(
          "../../../../../utils/setFullScreen"
        );
        fullScreenHandler();
      } catch (error) {
        console.error("Error loading setFullScreen module:", error);
      }
    }
  };

  const redirectPath = (currentUrl: PATH_ENUM, nexturl: string) => {
    return location.pathname.replace(currentUrl, nexturl);
  };

  useEffect(() => {
    const checkLocalStorage = async () => {
      if (getFromLocalStorage(LOCAL_STORAGE.USER)) {
        setLoading(true);
        setIsLoggedIn(true);

        try {
          const tokenLocal = JSON.parse(
            getFromLocalStorage(LOCAL_STORAGE.USER)
          );
          const token = tokenLocal.token;
          const response = await UseFetch(LOFI_ENDPOINT.AUTHENTICATED, "GET", {
            Authorization: `Bearer ${token}`,
          });
          if (response) {
            setUser({
              username: response.username,
              email: response.email,
              userId: response.userId,
            });
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLocalStorage();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="absolute z-[1] w-[80%] flex items-center text-sm text-white justify-between overflow-hidden">
      <div>
        <img
          className="h-20 w-48 hover:cursor-pointer"
          src={ICON_PATHS.logo}
          alt="Lofi Logo"
        />
      </div>

      <div className="flex w-[230px]">
        <div className="flex items-center gap-10">
          <LinkWithIcon
            icon={ICON_PATHS.info}
            text="How it works"
            onClickHandler={() => navigate(redirectPath(PATH_ENUM.LOFI, PATH_ENUM.GRAPH))}
          />
          <LinkWithIcon
            icon={ICON_PATHS.github}
            text="GitHub"
            onClickHandler={() => navigate(redirectPath(PATH_ENUM.LOFI, PATH_ENUM.GRAPH))}
          />
        </div>
      </div>
      <div className=" flex justify-end gap-3 items-center w-24 hover:cursor-pointer">
        <DarkLightSwitch />
        <img
          onClick={fullScreenButtonHandler}
          className="h-4 w-4"
          src={ICON_PATHS.expand}
          alt="Expand Icon"
        />
      </div>

      <div className="flex gap-2">
        {isLoggedIn ? (
          <>
            <div className="lofi-container p-[5px] justify-center flex">
              <p>Welcome back {user.username}</p>
            </div>
          </>
        ) : (
          <>
            <div className="lofi-container p-[5px] justify-center flex">
              <LinkWithIcon
                icon={ICON_PATHS.login}
                text="Login"
                onClickHandler={() => navigate(PATH_ENUM.LOFI_PORTAL)}
              />
            </div>
          </>
        )}
        {isLoggedIn && (
          <>
            <div className="lofi-container p-[5px] justify-center flex">
              <LinkWithIcon icon={ICON_PATHS.login} text="Logout" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

interface linkWithIcon {
  icon: string;
  text: string;
  onClickHandler?: () => void;
}

const LinkWithIcon = ({ icon, text, onClickHandler }: linkWithIcon) => {
  return (
    <div className="flex gap-[5px] w-32" onClick={onClickHandler}>
      <img className="h-5 w-5" src={icon} alt={`${text} Icon`} />
      <span className="hover:cursor-pointer after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-20 after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-left">
        {text}
      </span>
    </div>
  );
};

export default LofiHeader;

import { Body } from "../../Skeleton";
import Dashboard from "./Dashboard/Dashboard";
import LofiSignIn from "./UI/Input/LofiSignIn";

const background = "/assets/icons/login-bg.jpg";

const LofiPortal = () => {
  return (
    <div>
      <Body
        children={
          <>
            <div>
              <img
                className="relative videoIn"
                src={background}
                alt="login background"
              />
              <div className="absolute left-[36%] bottom-[10%] 2xl:left-[42%]">
                <LofiSignIn />
              </div>

              {
                <div>
                  <Dashboard />
                </div>
              }
            </div>
          </>
        }
      />
    </div>
  );
};

export default LofiPortal;

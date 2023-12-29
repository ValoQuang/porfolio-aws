import { Body } from "../../Skeleton";
import Dashboard from "./Dashboard/Dashboard";
import LofiInput from "./UI/Input/LofiInput";

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
              <div className="absolute left-[36%] bottom-[10%]">
                <LofiInput />
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

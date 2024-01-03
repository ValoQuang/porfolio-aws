import { Body } from "../../Skeleton";
import Dashboard from "./Dashboard/Dashboard";
import LofiForm from "./UI/Input/LofiForm";

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
              <div className="absolute left-[36%] sm:bottom-[5%] 2xl:bottom-[15%] 2xl:left-[42%]">
                <LofiForm />
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

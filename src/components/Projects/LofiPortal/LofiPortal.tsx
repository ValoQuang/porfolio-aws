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
              <div className="absolute left-[36%] top-[10%] h-[90%] 2xl:left-[42%]">
                <LofiForm />
              </div>
              {
                <>
                  <Dashboard />
                </>
              }
            </div>
          </>
        }
      />
    </div>
  );
};

export default LofiPortal;

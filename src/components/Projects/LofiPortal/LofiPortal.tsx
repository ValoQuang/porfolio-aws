import { Body } from "../../Skeleton";
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
                className="relative rounded-3xl w-[1280px]"
                src={background}
                alt="login background"
              />
              <div className="absolute w-1/3 left-[470px] bottom-[150px] bg-lime-400 h-96 lofi-container">
                <LofiInput />
              </div>
            </div>
          </>
        }
      />
    </div>
  );
};

export default LofiPortal;

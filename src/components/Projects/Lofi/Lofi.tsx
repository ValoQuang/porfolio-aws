import { Body } from "../../Skeleton";
import LofiButton from "./UI/Button/LofiRainButton";
import LofiSettingButton from "./UI/Button/LofiSettingButton";
import LofiHeader from "./UI/Header/LofiHeader";
import LofiHome from "./UI/Home/LofiHome";

const Lofi = () => {
  return (
    <>
      <div>
        <Body
          children={
            <div>
              <LofiHome />
              <div className="relative" id="lofi-video">
                <LofiHeader />
                <LofiSettingButton />
                <LofiButton />
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Lofi;

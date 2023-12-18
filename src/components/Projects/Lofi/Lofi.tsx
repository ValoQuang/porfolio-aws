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
            <>
              <div id="lofi-video">
                <LofiHeader />
                <LofiHome />
                <LofiSettingButton />
                <LofiButton />
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default Lofi;

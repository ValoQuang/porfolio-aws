import { Body } from "../../Skeleton";
import LofiButton from "./UI/Button/LofiRainButton";
import LofiHeader from "./UI/Header/LofiHeader";
import LofiHome from "./UI/Home/LofiHome";

const Lofi = () => {
  return (
    <>
      <div>
        <Body
          children={
            <>
              <LofiHeader />
              <LofiHome />
              <LofiButton />
            </>
          }
        />
      </div>
    </>
  );
};

export default Lofi;

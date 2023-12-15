import { Body } from "../../Skeleton";
import LofiButton from "./UI/Button/LofiButton";
import LofiHome from "./UI/Home/LofiHome";

const Lofi = () => {
  return (
    <>
      <div>
        <Body
          children={
            <div className="">
              <LofiHome />
              <LofiButton />
            </div>
          }
        />
      </div>
    </>
  );
};

export default Lofi;

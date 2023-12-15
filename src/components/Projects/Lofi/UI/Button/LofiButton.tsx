import { useState } from "react";

const RainToggleButton = () => {
  //const dispatch = useDispatch();
  //const rain = useSelector((state) => state.rainState);
  //onst { rainMode, rainValue } = rain;

  const [buttonClick, setButtonClick] = useState(false);

  const rainButtonHandler = () => {
    //if (rainValue === 0) dispatch(changeRainStatus(rainMode, 30));
    //else dispatch(changeRainStatus(rainMode, 0));
    setButtonClick(!buttonClick);
  };

  return (
    <div className="wrapper">
      {buttonClick && (
        <div>
          <video className="absolute" autoPlay loop>
            <source src="/assets/musics/rain_city.mp3" type="video/mp3" />
          </video>
        </div>
      )}
      <div
        className="button"
        onClick={rainButtonHandler}
        // onMouseOver={}
        // onMouseOut={MouseOut}
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-lime-300">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="32px"
            width="32px"
            
          >
            <path d="M2.658 11.026a.5.5 0 01.316.632l-.5 1.5a.5.5 0 11-.948-.316l.5-1.5a.5.5 0 01.632-.316zm9.5 0a.5.5 0 01.316.632l-.5 1.5a.5.5 0 11-.948-.316l.5-1.5a.5.5 0 01.632-.316zm-7.5 1.5a.5.5 0 01.316.632l-.5 1.5a.5.5 0 11-.948-.316l.5-1.5a.5.5 0 01.632-.316zm9.5 0a.5.5 0 01.316.632l-.5 1.5a.5.5 0 11-.948-.316l.5-1.5a.5.5 0 01.632-.316zm-.753-8.499a5.001 5.001 0 00-9.499-1.004A3.5 3.5 0 103.5 10H13a3 3 0 00.405-5.973zM8.5 1a4 4 0 013.976 3.555.5.5 0 00.5.445H13a2 2 0 010 4H3.5a2.5 2.5 0 11.605-4.926.5.5 0 00.596-.329A4.002 4.002 0 018.5 1zM7.053 11.276A.5.5 0 017.5 11h1a.5.5 0 01.474.658l-.28.842H9.5a.5.5 0 01.39.812l-2 2.5a.5.5 0 01-.875-.433L7.36 14H6.5a.5.5 0 01-.447-.724l1-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RainToggleButton;

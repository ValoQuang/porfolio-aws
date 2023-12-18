import React from "react";
import { LOFI_AMBIENT, LOFI_MOOD } from "../../../../../types";

const SettingBoard = () => {
  const ambientArray = [
    {
      label: LOFI_AMBIENT.CITY_TRAFFIC,
      volume: 10,
    },
    {
      label: LOFI_AMBIENT.CITY_RAIN,
      volume: 30,
    },
    {
      label: LOFI_AMBIENT.PEOPLE,
      volume: 20,
    },
    {
      label: LOFI_AMBIENT.RIVER,
      volume: 40,
    },
    {
      label: LOFI_AMBIENT.WIND,
      volume: 30,
    },
    {
      label: LOFI_AMBIENT.FIRE_PLACE,
      volume: 90,
    },
    {
      label: LOFI_AMBIENT.SUMMER_STORM,
      volume: 40,
    },
    {
      label: LOFI_AMBIENT.WAVE,
      volume: 0,
    },
  ];

  const moodArray = [
    {
      label: LOFI_MOOD.CHILL,
    },
    {
      label: LOFI_MOOD.FOCUS,
    },
    {
      label: LOFI_MOOD.SLEEPY,
    },
  ];

  return (
    <div className="absolute text-white left-[175px] flex flex-col justify-between p-2 top-[190px] hover:border-none hover:border-0 border-none w-80 h-96 bg-[#14141d] bg-opacity-95 rounded-xl">
      <div className="flex justify-between">
        {moodArray.map((config, index) => {
          return <>
           <div key={index} className="lofi-button w-24 h-24">{config.label.toUpperCase()}</div></>;
        })}
       
      </div>
      <div className="flex flex-col gap-3">
        {ambientArray.map((config, index) => {
          return (
            <>
              <div
                key={index}
                className="flex items-center justify-between text-xs"
              >
                <label htmlFor={config.label}>
                  {config.label.toUpperCase()}
                </label>
                <input
                  id={config.label}
                  type="range"
                  min={0}
                  max="100"
                  value={config.volume}
                  className="accent-orange-500 w-32 appearance-none h-4 rounded-full bg-slate-700"
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SettingBoard;

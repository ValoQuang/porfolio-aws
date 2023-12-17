import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LOFI_BACKGROUND, LOFI_WEATHER } from "../types/";

interface lofiStore {
  setBackground: (state: boolean) => void;
  setWeather: (state: boolean) => void;
  currentDayMode: string;
  currentWeatherMode: string;
}

export const initialLofiState = {
  currentDayMode: LOFI_BACKGROUND.DAY,
  currentWeatherMode: LOFI_WEATHER.SUNNY,
  setBackground: () => {},
  setWeather: () => {},
};

const store = persist<lofiStore>(
  (set, _) => ({
    ...initialLofiState,
    setBackground: (name) => {
      set((state) => {
        if (name) {
          return { ...state, currentDayMode: LOFI_BACKGROUND.NIGHT };
        } else {
          return { ...state, currentDayMode: LOFI_BACKGROUND.DAY };
        }
      });
    },
    setWeather: (name) => {
      set((state) => {
        if (name) {
          return { ...state, currentWeatherMode: LOFI_WEATHER.RAIN };
        } else {
          return { ...state, currentWeatherMode: LOFI_WEATHER.SUNNY };
        }
      });
    },
  }),
  {
    storage: createJSONStorage(() => sessionStorage),
    name: "modal",
  }
);

export const useLofiStore = create(store);

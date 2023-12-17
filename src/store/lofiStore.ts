import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LOFI_BACKGROUND, LOFI_WEATHER } from "../types/";

type initialLoad = {
  isDayMode: boolean;
} | {
  isRainMode: boolean;
};

interface lofiStore {
  setBackground: (state: boolean) => void;
  setWeather: (state: boolean) => void;
  setInitialLoad: (state: initialLoad) => void;
  currentDayMode: string;
  currentWeatherMode: string;
  isDayMode: boolean;
  isRainMode: boolean;
}

export const initialLofiState = {
  currentDayMode: LOFI_BACKGROUND.DAY,
  isDayMode: false,
  isRainMode: false,
  currentWeatherMode: LOFI_WEATHER.SUNNY,
  setBackground: () => {},
  setWeather: () => {},
  setInitialLoad: () => {},
};

const store = persist<lofiStore>(
  (set, _) => ({
    ...initialLofiState,
    setInitialLoad: (input) => {
      set({
        ...input,
      });
    },
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
    name: "background",
  }
);

export const useLofiStore = create(store);

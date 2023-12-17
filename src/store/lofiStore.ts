import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LOFI_BACKGROUND, LOFI_WEATHER } from "../types/";

type initialLoad =
  | {
      isDayMode: boolean;
    }
  | {
      isRainMode: boolean;
    };

interface initialAmbient {
  wind: number;
  people: number;
  river: number;
  city_traffic: number;
  city_rain: number;
  fireplace: number;
  snow: number;
  summer_storm: number;
  wave: number;
}
interface lofiStore {
  setBackground: (state: boolean) => void;
  setWeather: (state: boolean) => void;
  setInitialLoad: (state: initialLoad) => void;
  currentDayMode: string;
  currentWeatherMode: string;
  isDayMode: boolean;
  isRainMode: boolean;
  currentAmbient: initialAmbient;
}

const initialAmbientSound = {
  wind: 0,
  people: 0,
  river: 0,
  city_traffic: 0,
  city_rain: 0,
  fireplace: 0,
  snow: 0,
  summer_storm: 0,
  wave: 0,
};

export const initialLofiState = {
  currentDayMode: LOFI_BACKGROUND.DAY,
  currentWeatherMode: LOFI_WEATHER.SUNNY,
  isDayMode: false,
  isRainMode: false,
  setBackground: () => {},
  setWeather: () => {},
  setInitialLoad: () => {},
  currentAmbient: initialAmbientSound,
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

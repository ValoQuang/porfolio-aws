import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LOFI_AMBIENT, LOFI_BACKGROUND, LOFI_WEATHER } from "../types/";

type initialLoad =
  | {
      isDayMode: boolean;
    }
  | {
      isRainMode: boolean;
    }
  | {
      currentAmbient: initialAmbient;
    };

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

export interface initialAmbient {
  [LOFI_AMBIENT.RAIN]: number;
  [LOFI_AMBIENT.WIND]: number;
  [LOFI_AMBIENT.PEOPLE]: number;
  [LOFI_AMBIENT.RIVER]: number;
  [LOFI_AMBIENT.CITY_TRAFFIC]: number;
  [LOFI_AMBIENT.CITY_RAIN]: number;
  [LOFI_AMBIENT.FIRE_PLACE]: number;
  [LOFI_AMBIENT.SNOW]: number;
  [LOFI_AMBIENT.SUMMER_STORM]: number;
  [LOFI_AMBIENT.WAVE]: number;
}

const initialAmbientSound = {
  [LOFI_AMBIENT.RAIN]: 50,
  [LOFI_AMBIENT.WIND]: 0,
  [LOFI_AMBIENT.PEOPLE]: 0,
  [LOFI_AMBIENT.RIVER]: 0,
  [LOFI_AMBIENT.CITY_TRAFFIC]: 0,
  [LOFI_AMBIENT.CITY_RAIN]: 0,
  [LOFI_AMBIENT.FIRE_PLACE]: 0,
  [LOFI_AMBIENT.SNOW]: 0,
  [LOFI_AMBIENT.SUMMER_STORM]: 0,
  [LOFI_AMBIENT.WAVE]: 0,
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

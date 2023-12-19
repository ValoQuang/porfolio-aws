import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LOFI_AMBIENT, LOFI_BACKGROUND, LOFI_MOOD, LOFI_WEATHER, lofiStore } from "../types/";

const initialAmbientSound = {
  [LOFI_AMBIENT.RAIN]: 50,
  [LOFI_AMBIENT.WIND]: 0,
  [LOFI_AMBIENT.PEOPLE]: 0,
  [LOFI_AMBIENT.RIVER]: 0,
  [LOFI_AMBIENT.CITY_TRAFFIC]: 0,
  [LOFI_AMBIENT.RAIN_FOREST]: 0,
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
  setVolume: () => {},
  currentAmbient: initialAmbientSound,
  currentMood: LOFI_MOOD.MIX,
};

const store = persist<lofiStore>(
  (set, _) => ({
    ...initialLofiState,
    setInitialLoad: (input) => {
      set({
        ...input,
      });
    },
    setVolume: (key, value) => {
      set((state) => {
        return {
          currentAmbient: {
            ...state.currentAmbient,
            [key]: value,
          },
        };
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

import { LOFI_AMBIENT, LOFI_MOOD } from "./lofiEnum";

export interface initialAmbient {
  [LOFI_AMBIENT.RAIN]: number;
  [LOFI_AMBIENT.WIND]: number;
  [LOFI_AMBIENT.PEOPLE]: number;
  [LOFI_AMBIENT.RIVER]: number;
  [LOFI_AMBIENT.CITY_TRAFFIC]: number;
  [LOFI_AMBIENT.RAIN_FOREST]: number;
  [LOFI_AMBIENT.FIRE_PLACE]: number;
  [LOFI_AMBIENT.SNOW]: number;
  [LOFI_AMBIENT.SUMMER_STORM]: number;
  [LOFI_AMBIENT.WAVE]: number;
}

type initialLoad =
  | {
      isDayMode: boolean;
    }
  | {
      isRainMode: boolean;
    }
  | {
      currentMood: string;
    };

export interface lofiStore {
  setBackground: (state: boolean) => void;
  setWeather: (state: boolean) => void;
  setInitialLoad: (state: initialLoad) => void;
  setVolume: (key: string, value: number) => void;
  currentDayMode: string;
  currentWeatherMode: string;
  isDayMode: boolean;
  isRainMode: boolean;
  currentAmbient: initialAmbient;
  currentMood: string | LOFI_MOOD.CHILL | LOFI_MOOD.FOCUS | LOFI_MOOD.JAZZ;
}

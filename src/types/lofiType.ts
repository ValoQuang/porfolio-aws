import { FormikErrors, FormikTouched } from "formik";
import { LOFI_AMBIENT, LOFI_MOOD } from "./lofiEnum";
import { ChangeEventHandler, FormEvent } from "react";

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
  reset: () => void;
  currentDayMode: string;
  currentWeatherMode: string;
  isDayMode: boolean;
  isRainMode: boolean;
  currentAmbient: initialAmbient;
  currentMood: string | LOFI_MOOD.CHILL | LOFI_MOOD.SLEEP | LOFI_MOOD.JAZZ;
}

export type FormikFieldFeedback =
  | string
  | FormikErrors<any>
  | string[]
  | FormikErrors<any>[]
  | undefined
  | any;
export interface FormikInputProp {
  values: ValueInputType;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: ChangeEventHandler<HTMLInputElement>;
  errors?: FormikFieldFeedback;
  touched: FormikFieldFeedback;
  resetForm?: () => void;
}

export interface ValueInputType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LofiInputProp {
  title: string;
  type: string;
  value: string | number;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: ChangeEventHandler<HTMLInputElement>;

  id: string;
  error?: FormikFieldFeedback;
  touched: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
}

export type ErrorType = {
  error: FormikFieldFeedback | undefined;
  touched: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
};

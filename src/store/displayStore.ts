import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/* eslint-disable @typescript-eslint/ban-types */
export type DeepPartial<T> = T extends Function
  ? T
  : T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

export type StoreType<State> = State & {
  set: (updatedState: DeepPartial<State>) => void;
  reset?: () => void;
};
type displayState = {
  darkMode: boolean;
  setDarkMode: (state: boolean) => void;
};
export const initialState = {
  darkMode: false,
};

const store = persist<displayState>(
  (set, _) => ({
    ...initialState,
    setDarkMode: (state) => {
      set({ darkMode: state });
    },
  }),
  {
    storage: createJSONStorage(() => sessionStorage),
    name: "",
  }
);

export const useDisplayStore = create(store);

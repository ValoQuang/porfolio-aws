import { create } from "zustand";

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
  lightMode: boolean;
};
export const initialState: displayState = {
  lightMode: true,
};

const store = (set: (arg0: (state: any) => { lightMode: boolean }) => any) => ({
  setDarkMode: () => {
    set((state) => ({ lightMode: !state.lightMode }));
  },
});

export const useDisplayStore = create(store);

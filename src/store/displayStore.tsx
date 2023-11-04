import { immer } from "zustand/middleware/immer";
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

const store = immer<StoreType<displayState>>((set) => ({
  ...initialState,
  set: (updatedState) => {
    set((state) => ({ ...state, ...updatedState }));
  },
}));

export const useDisplayStore = create(store);

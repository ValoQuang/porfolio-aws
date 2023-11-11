import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type routeState = {
  route: string;
  setRouteState?: (url: string) => void;
};
export const initialState: routeState = {
  route: "",
};

const store = immer<routeState>((set, _) => ({
  ...initialState,
  setRouteState: () => {
    set((state: any) => ({ route: state }));
  },
}));

export const useRouteStore = create(store);

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { GRAPH_MODALS } from "../types";

interface modalStore {
  setModalState: (modalName: string) => void;
  isStatusOpen: boolean;
  isInfoOpen: boolean;
}

export const initialState = {
  setModalState: () => {},
  isStatusOpen: false,
  isInfoOpen: false,
};

const store = persist<modalStore>(
  (set, _) => ({
    ...initialState,
    setModalState: (name) => {
      set((state) => {
        if (name === GRAPH_MODALS.STATUS) {
          return { ...state, isStatusOpen: !state.isStatusOpen };
        } else {
          return { ...state, isInfoOpen: !state.isInfoOpen };
        }
      });
    },
  }),
  {
    storage: createJSONStorage(() => sessionStorage),
    name: "modal",
  }
);

export const useModalStore = create(store);

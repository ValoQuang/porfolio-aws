import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type modalStore = {
  isModalOpen: boolean;
  setModalOpen: (state: boolean) => void;
};

export const initialState = {
  isModalOpen: false,
  setModalOpen: null,
};

const store = persist<modalStore>(
  (set, _) => ({
    ...initialState,
    setModalOpen: (state) => {
      set({ isModalOpen: state });
    },
  }),
  {
    storage: createJSONStorage(() => sessionStorage),
    name: "modal",
  }
);

export const useModalStore = create(store);

import { create } from "zustand";

interface NavBarStore {
  isOpen: boolean;
  setOpen: (newIsOpen: boolean) => void;
}

export const useNavBarStore = create<NavBarStore>((set) => ({
  isOpen: false,
  setOpen: (newIsOpen: boolean) => set({ isOpen: newIsOpen }),
}));

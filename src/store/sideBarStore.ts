import { create } from "zustand";

interface SideBarStore {
  toggleSidebar: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const useSideBarStore = create<SideBarStore>((set) => ({
  toggleSidebar: false,

  setOpen: (isOpen: boolean) => {
    set({ toggleSidebar: isOpen });
  },
}));

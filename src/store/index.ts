import { create } from "zustand";

interface State {
  home: string;
  statement: string;
}

interface TestStore {
  state: State;
  actions: {
    setState: (newState: State) => void;
  };
}

export const useTestStore = create<TestStore>((set) => ({
  state: {
    home: "",
    statement: "",
  },

  actions: {
    setState: (newState: State) => set({ state: newState }),
  },
}));

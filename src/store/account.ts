import { AccountResponse } from "@/models/account";
import { getAccount } from "../services/accountService";
import { create } from "zustand";

interface AccountStore {
  account: AccountResponse | null;
  setAccount: (token: string) => void;
}

export const useAccountStore = create<AccountStore>((set) => ({
  account: null,

  setAccount: async (token: string) => {
    const account = await getAccount(token);
    set({ account });
  },
}));

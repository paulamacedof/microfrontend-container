import { AccountResponse } from "@/models/account";
import { getAccount } from "../services/accountService";
import { create } from "zustand";

interface AccountStore {
  account: AccountResponse | [];
  setAccount: (token: string) => void;
}

export const useAccountStore = create<AccountStore>((set) => ({
  account: [],

  setAccount: async (token: string) => {
    const account = await getAccount(token);
    set({ account });
  },
}));

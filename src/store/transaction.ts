import { TransactionResponse } from "@/models/transactions";
import { create } from "zustand";

interface TransactionsStore {
  transactions: TransactionResponse[];
  getTransactions: (transactions: TransactionResponse[]) => void;
}

export const useTransactionStore = create<TransactionsStore>((set, get) => ({
  transactions: [],

  getTransactions: async (transactions: TransactionResponse[]) => {
    set({ transactions });
  },
}));

import { TransactionResponse } from "@/models/transactions";
import { create } from "zustand";

interface TransactionsStore {
  transactions: TransactionResponse[];
  addTransaction: (transaction: TransactionResponse) => void;
  getTransactions: (transactions: TransactionResponse[]) => void;
}

export const useTransactionStore = create<TransactionsStore>((set, get) => ({
  transactions: [],

  getTransactions: async (transactions: TransactionResponse[]) => {
    set({ transactions });
  },

  addTransaction: async (transaction: TransactionResponse) => {
    const currentTransactions = get().transactions;
    set({ transactions: [...currentTransactions, transaction] });
  },
}));

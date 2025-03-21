export type TransactionType = "deposit" | "transfer" | "expense";

export interface TransactionResponse {
  id: string;
  type: TransactionType;
  amount: number;
  date: Date;
  accountId: string;
}

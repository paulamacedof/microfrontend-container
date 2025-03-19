export interface AccountResponse {
  account: {
    id: string;
    type: string;
    userId: string;
  }[];
  transactions: {
    id: string;
    accountId: string;
    type: string;
    value: number;
    date: string;
  }[];
  cards: {
    id: string;
    accountId: string;
    type: string;
    is_blocked: boolean;
    number: string;
    dueDate: string;
    functions: string;
    cvc: string;
    paymentDate: string;
    name: string;
  }[];
}

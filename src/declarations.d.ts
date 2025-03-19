declare module "home/App" {
  import { ComponentType } from "react";

  interface HomeProps {
    account: AccountResponse;
    transactionStore: {
      transactions: TransactionResponse[];
      addTransaction: (transaction: TransactionResponse) => void;
      getTransactions: (transactions: TransactionResponse[]) => void;
    };
  }

  const HomeApp: ComponentType<HomeProps>;
  export default HomeApp;
}

declare module "statement/App" {
  import { ComponentType } from "react";
  import { Actions, State } from "./store/index.js";

  interface StatementProps {
    state: State;
    actions: Actions;
  }

  const StatementApp: ComponentType<StatementProps>;
  export default StatementApp;
}

declare module "nav_bar/App" {
  import { ComponentType } from "react";
  import { Actions, State } from "./store/index.js";

  interface NavBarProps {
    state?: State;
    actions?: Actions;
  }

  const NavBarApp: ComponentType<NavBarProps>;
  export default NavBarApp;
}

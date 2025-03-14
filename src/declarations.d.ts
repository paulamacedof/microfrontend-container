declare module "home/App" {
  import { ComponentType } from "react";
  import { Actions, State } from "./store/index.js";

  interface HomeProps {
    state: State;
    actions: Actions;
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

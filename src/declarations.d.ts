// src/declarations.d.ts
declare module "home/App" {
  import { ComponentType } from "react";
  import { State, Actions } from "./store/index.js";

  interface HomeProps {
    state: State;
    actions: Actions;
  }

  const HomeApp: ComponentType<HomeProps>;
  export default HomeApp;
}

declare module "statement/App" {
  import { ComponentType } from "react";
  import { State, Actions } from "./store/index.js";

  interface StatementProps {
    state: State;
    actions: Actions;
  }

  const StatementApp: ComponentType<StatementProps>;
  export default StatementApp;
}

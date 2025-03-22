declare module "home/App" {
  import { ComponentType } from "react";

  interface HomeProps {
    account: AccountResponse;
    setAccount: (token: string) => void;
  }

  const HomeApp: ComponentType<HomeProps>;
  export default HomeApp;
}

declare module "statement/App" {
  import { ComponentType } from "react";

  interface StatementProps {
    account: AccountResponse;
    setAccount: (token: string) => void;
  }

  const StatementApp: ComponentType<StatementProps>;
  export default StatementApp;
}

declare module "nav_bar/App" {
  import { ComponentType } from "react";

  interface NavBarProps {
    toggleSidebar: boolean;
    pathname: string;
    setOpen: (isOpen: boolean) => void;
  }
  const NavBarApp: ComponentType<NavBarProps>;
  export default NavBarApp;
}

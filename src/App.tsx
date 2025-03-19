import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { useUserStore } from "./store/userStore";
import { useTransactionStore } from "./store/transaction";
import { login } from "./services/userServices";
import { useAccountStore } from "./store/account";
// Carrega os microfrontends expostos
const RemoteHome = lazy(() => import("home/App"));
// const RemoteStatement = React.lazy(() => import("statement/App"));
// const RemoteNavBar = React.lazy(() => import("nav_bar/App"));

function App() {
  const { user, getUser } = useUserStore();
  const { account, setAccount } = useAccountStore();
  const { transactions, addTransaction, getTransactions } =
    useTransactionStore();

  useEffect(() => {
    const token = login({
      email: "teste@gmail.com",
      password: "testes",
    });
    console.log(token);
    //  setAccount(token);
    // getUser();
  }, [getUser]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando NavBar...</div>}>
        {/* <RemoteNavBar username={user.username} /> */}
      </Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Carregando Home...</div>}>
              <RemoteHome
                user={user}
                account={account}
                transactionStore={{
                  transactions,
                  addTransaction,
                  getTransactions,
                }}
              />
            </Suspense>
          }
        />
        {/* <Route
          path="/statement"
          element={
            <Suspense fallback={<div>Carregando Statement...</div>}>
              <RemoteStatement state={state} actions={actions} />
            </Suspense>
          }
        /> */}
      </Routes>
      <Toaster position="top-right" richColors closeButton />
    </BrowserRouter>
  );
}

export default App;

import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { useTransactionStore } from "./store/transaction";
import { getUser, login } from "./services/userServices";
import { useAccountStore } from "./store/account";
// Carrega os microfrontends expostos
const RemoteHome = lazy(() => import("home/App"));
// const RemoteStatement = React.lazy(() => import("statement/App"));
// const RemoteNavBar = React.lazy(() => import("nav_bar/App"));

function App() {
  const { account, setAccount } = useAccountStore();
  const { transactions, addTransaction, getTransactions } =
    useTransactionStore();

  useEffect(() => {
    async function handleLogin() {
      const user = await getUser();

      const token = await login({
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("user", JSON.stringify(user));

      localStorage.setItem("token", token);
      setAccount(token);
    }

    handleLogin();
  }, [setAccount]);

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

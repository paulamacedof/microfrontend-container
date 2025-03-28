import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { getUser, login } from "./services/userServices";
import { useAccountStore } from "./store/account";
import { useSideBarStore } from "./store/sideBarStore";
import { Sidebar } from "./components/Sidebar";
// Carrega os microfrontends expostos
const RemoteHome = lazy(() => import("home/App"));
const RemoteStatement = lazy(() => import("statement/App"));
const RemoteNavBar = lazy(() => import("nav_bar/App"));

function App() {
  const pathname = window.location.pathname;
  const isMobile = window.innerWidth < 768;

  const { toggleSidebar, setOpen } = useSideBarStore();
  const { account, setAccount } = useAccountStore();

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
        <section>
          <RemoteNavBar
            toggleSidebar={toggleSidebar}
            pathname={pathname}
            setOpen={setOpen}
          />
        </section>
      </Suspense>
      <section className="flex flex-col min-h-screen bg-[#E4EDE3] p-6 lg:justify-center gap-6 lg:flex-row">
        <Sidebar
          isMobile={isMobile}
          isOpen={toggleSidebar}
          onClose={() => setOpen(false)}
          pathname={pathname}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Carregando Home...</div>}>
                <RemoteHome account={account} setAccount={setAccount} />
              </Suspense>
            }
          />
          <Route
            path="/statement"
            element={
              <Suspense fallback={<div>Carregando Statement...</div>}>
                <RemoteStatement account={account} setAccount={setAccount} />
              </Suspense>
            }
          />
        </Routes>
      </section>

      <Toaster position="top-right" richColors closeButton />
    </BrowserRouter>
  );
}

export default App;

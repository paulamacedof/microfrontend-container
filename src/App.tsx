import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavBarStore } from "./store/nav-bar";
import { useTestStore } from "./store";
// Carrega os microfrontends expostos
const RemoteHome = React.lazy(() => import("home/App"));
const RemoteStatement = React.lazy(() => import("statement/App"));
const RemoteNavBar = React.lazy(() => import("nav_bar/App"));

function App() {
  const { state, actions } = useTestStore();
  const { isOpen, setOpen } = useNavBarStore();

  const pathname = window.location.pathname;

  const stateProps = {
    toggleSidebar: isOpen,
    pathname: pathname,
    user: "Guilherme",
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando NavBar...</div>}>
        <RemoteNavBar state={stateProps} setOpen={setOpen} />
      </Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Carregando Home...</div>}>
              <RemoteHome state={state} actions={actions} />
            </Suspense>
          }
        />
        <Route
          path="/statement"
          element={
            <Suspense fallback={<div>Carregando Statement...</div>}>
              <RemoteStatement state={state} actions={actions} />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

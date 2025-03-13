// src/App.js do container
import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useGlobalContextActions } from "./state/actions";

// Carrega os microfrontends expostos
const RemoteHome = React.lazy(() => import("home/App"));
const RemoteStatement = React.lazy(() => import("statement/App"));

function App() {
  const { state, actions } = useGlobalContextActions();

  return (
    <BrowserRouter>
      <Link to="/statement">Extrato</Link>
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

// src/App.js do container
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Carrega os microfrontends expostos
const RemoteHome = React.lazy(() => import("home/App"));
const RemoteTransaction = React.lazy(() => import("transaction/App"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Carregando Home...</div>}>
              <RemoteHome />
            </Suspense>
          }
        />
        <Route
          path="/transaction"
          element={
            <Suspense fallback={<div>Carregando Transaction...</div>}>
              <RemoteTransaction />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

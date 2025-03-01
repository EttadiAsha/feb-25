import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
//import Registration from "./components/Registration";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Registration />} path="/reg" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
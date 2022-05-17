import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeList from "./pages/EmployeList";
import Home from "./pages/Home";
import { DataProvider } from "./DataContext";
function App() {
  return (
    <BrowserRouter>
      {" "}
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employe-list" element={<EmployeList />} />
        </Routes>{" "}
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import Home from "./components/Home";
import AddWork from "./components/AddWork";
import { Route, Routes } from "react-router-dom";
import List from "./components/List";
import { ToastContainer } from "react-toastify";

const App = () => {
  const url = "http://localhost:4001";
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/addWork" element={<AddWork url={url} />}></Route>
          <Route path="/list" element={<List url={url} />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

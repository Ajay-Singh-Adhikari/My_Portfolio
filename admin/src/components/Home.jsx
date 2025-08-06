import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="mx-4 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 dark:bg-gray-900">
        <Sidebar />
        <main className="flex-1 flex flex-col p-4 bg-white dark:bg-gray-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Home;

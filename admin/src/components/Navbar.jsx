import React, { useEffect, useState } from "react";
import { FaBriefcase, FaUserCircle } from "react-icons/fa";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <nav className="flex items-center border-b border-pink-800 justify-between px-6 py-2 text-black dark:text-white dark:bg-gray-900">
      <div className="flex items-center gap-3">
        <FaBriefcase className="w-4 h-4" />
        <h2 className="text-lg text-pink-700">Admin Panel</h2>
      </div>

      <div className="flex items-center gap-6">
        {theme === "light" ? (
          <HiMoon
            onClick={toggleTheme}
            className="w-6 h-6 cursor-pointer transition-colors duration-200"
          />
        ) : (
          <HiSun
            onClick={toggleTheme}
            className="w-6 h-6 cursor-pointer transition-colors duration-200"
          />
        )}
        <FaUserCircle className="w-8 h-8 cursor-pointer transition-colors duration-200" />
      </div>
    </nav>
  );
};

export default Navbar;

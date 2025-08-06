import React from "react";
import { NavLink } from "react-router-dom";
import { FiPlus, FiList } from "react-icons/fi";

const Sidebar = () => {
  const links = [
    { name: "Add Item", Icon: FiPlus, to: "/addWork" },
    { name: "List Item", Icon: FiList, to: "/list" },
  ];

  return (
    <aside className="md:w-52 w-20 bg-white dark:bg-gray-900 text-black dark:text-white border-r border-pink-800 dark:border-gray-700 flex flex-col my-4 p-4">
      <nav className="flex flex-col gap-4">
        {links.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-pink-600 text-white"
                  : "hover:bg-pink-100 dark:hover:bg-gray-700"
              }`
            }
          >
            <item.Icon className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaGraduationCap,
  FaTools,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#hero");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const navLinks = [
    { href: "#hero", label: "Home", icon: <FaHome size={20} /> },
    {
      href: "#education",
      label: "Education",
      icon: <FaGraduationCap size={20} />,
    },
    { href: "#services", label: "My Services", icon: <FaTools size={20} /> },
    { href: "#works", label: "My Works", icon: <FaBriefcase size={20} /> },
    { href: "#contact", label: "Contact", icon: <FaEnvelope size={20} /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#131313] border-b border-black dark:border-white shadow">
      <div className="flex justify-between items-center px-6 py-2">
        <a
          href="/"
          onClick={() => {
            window.scrollTo(0, 0);
            setActiveSection("#hero");
          }}
          className="text-black dark:text-white text-2xl font-bold cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          Ajay <span className="text-pink-500">Singh Adhikari</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-4 text-black dark:text-white text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`py-2 rounded transition ${
                activeSection === link.href
                  ? "text-pink-600 underline font-bold underline-offset-4"
                  : "hover:text-pink-600"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center px-2">
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
          </div>
          <a
            href="#contact"
            className="border border-black dark:border-white rounded-md hover:rounded-full transition hover:scale-105 font-bold px-3 py-2"
          >
            Hire Me
          </a>
        </nav>

        {/* Tablet nav */}
        <nav className="hidden md:flex lg:hidden gap-4 text-black dark:text-white text-base font-medium relative">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="group relative flex flex-col items-center"
            >
              <a
                href={link.href}
                className={`p-2 rounded transition ${
                  activeSection === link.href
                    ? "text-pink-600 underline font-semibold underline-offset-4"
                    : "hover:text-pink-600"
                }`}
              >
                {link.icon}
              </a>
              <span className="hidden group-hover:block absolute top-10 bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded shadow">
                {link.label}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-4">
            {theme === "light" ? (
              <HiMoon
                onClick={toggleTheme}
                className="w-6 h-6 cursor-pointer"
              />
            ) : (
              <HiSun onClick={toggleTheme} className="w-6 h-6 cursor-pointer" />
            )}
          </div>
          <a
            href="#contact"
            className="border border-black dark:border-white bg-pink-600 rounded-md hover:rounded-full transition hover:scale-105 font-bold p-2"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile: theme + hamburger */}
        <div className="flex items-center gap-4 px-4 md:hidden">
          {theme === "light" ? (
            <HiMoon onClick={toggleTheme} className="w-6 h-6 cursor-pointer" />
          ) : (
            <HiSun onClick={toggleTheme} className="w-6 h-6 cursor-pointer" />
          )}
          <button
            className="text-black dark:text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden absolute top-full right-0 w-1/2 h-screen bg-white/70 dark:bg-[#131313]/70 backdrop-blur-md shadow-md py-2 flex flex-col gap-4 text-black dark:text-white text-base font-medium transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setOpen(false);
                window.scrollTo(0, 0);
                setActiveSection(link.href);
              }}
              className={`px-4 py-2 rounded transition text-left ${
                activeSection === link.href
                  ? "bg-pink-600 text-white"
                  : "hover:bg-pink-600 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-black dark:border-white bg-pink-600 rounded-md hover:rounded-full transition hover:scale-105 font-bold px-3 py-2 text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}

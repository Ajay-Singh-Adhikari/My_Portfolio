import { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaTelegram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Contact({ onShowSection }) {
  const { links, contacts } = useSelector((state) => state.contact);

  const iconMap = {
    FaLinkedin,
    FaTwitter,
    FaGithub,
    FaTelegram,
    FaEnvelope,
    FaPhone,
  };

  const quickLinks = [
    { label: "My Certificates", section: "certificates" },
    { label: "My Resume", section: "resume" },
    { label: "My Skills", section: "skills" },
    {
      label: "YouTube Channel",
      href: "https://www.youtube.com/@Hostel_Life_3",
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24">
      {/* Quick Links Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-pink-600 mb-6 border-b border-pink-600 pb-2">
          Quick Links
        </h3>
        <ul className="space-y-3">
          {quickLinks.map(({ label, section, href }) => (
            <li key={label}>
              <a
                href={href || `#${section}`}
                onClick={(e) => {
                  if (section) {
                    e.preventDefault();
                    onShowSection(section);
                  }
                }}
                className="block px-3 py-2 rounded transition bg-gray-200 dark:bg-gray-900 hover:bg-pink-600"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Links (Social) */}
      <div className="bg-gradient-to-b from-white dark:from-[#131313] via-pink-200 dark:via-pink-900 to-pink-500 dark:to-pink-500 py-12 px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 font-mono dark:text-white">
            Contact Me
          </h1>
          <div className="flex justify-center gap-4 mt-4 text-xl">
            {links.map((item, id) => {
              const Icon = iconMap[item.icon];
              return (
                <a
                  key={id}
                  href={item.href}
                  className="border border-black dark:border-white p-2 rounded-full transition hover:text-pink-600 hover:border-pink-600 hover:scale-110 dark:hover:text-pink-400"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact via Email or Phone */}
        <h2 className="text-center text-2xl font-bold mb-12 dark:text-white">
          Connect me via Email or Phone
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
          {contacts.map((item, id) => {
            const Icon = iconMap[item.icon];
            const href =
              item.heading === "Phone"
                ? `tel:${item.contact}`
                : `mailto:${item.contact}`;
            return (
              <div
                key={id}
                className="relative dark:bg-transparent border border-black dark:border-white rounded-lg p-6 w-full md:w-1/2 flex flex-col items-start transition hover:scale-105 hover:bg-pink-500 dark:hover:bg-pink-600"
              >
                <a
                  href={href}
                  className="absolute -top-5 left-6 border border-black dark:border-white bg-white dark:bg-[#131313] rounded-full p-3 transition hover:text-white hover:bg-black"
                >
                  <Icon size={20} />
                </a>
                <h3 className="text-xl font-semibold mt-6 mb-2 dark:text-white">
                  {item.heading}
                </h3>
                <p className="text-black dark:text-white">{item.contact}</p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p className="text-center text-white text-xs mt-6">
          © 2025 Ajay Singh Adhikari. All rights reserved.
        </p>
      </div>
    </section>
  );
}

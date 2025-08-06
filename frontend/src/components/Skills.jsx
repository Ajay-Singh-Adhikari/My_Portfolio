import { CiCircleChevDown } from "react-icons/ci";

export default function Skills({ onClose }) {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Redux Toolkit", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Node.js", level: "Beginner" },
    { name: "MongoDB", level: "Beginner" },
    { name: "Express", level: "Beginner" },
    { name: "MySQL", level: "Beginner" },
  ];

  return (
    <section id="skills" className="py-12 px-4">
      <h2 className="text-4xl font-bold text-pink-600 mb-8 mt-8 font-mono text-center">
        My Skills
      </h2>
      <button
        onClick={onClose}
        className="transition underline ml-3 text-4xl font-bold text-pink-600 mt-4 mb-8 text-center font-mono"
      >
        <CiCircleChevDown />
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.map(({ name, level }, idx) => (
          <div
            key={idx}
            className="border border-black dark:border-white rounded-xl p-4 transition hover:bg-pink-600 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-2 dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-black dark:text-gray-300">
              Level: {level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

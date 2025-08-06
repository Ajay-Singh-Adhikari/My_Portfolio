import { CiCircleChevDown } from "react-icons/ci";

const Resume = ({ onClose }) => {
  return (
    <section id="resume" className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-8 font-mono">
          My Resume
        </h2>
        <button
          onClick={onClose}
          className="text-4xl font-bold text-pink-600 underline transition mb-8"
        >
          <CiCircleChevDown />
        </button>
        <a
          href="/Ajay_Resume.pdf"
          download
          className="ml-6 text-pink-800 hover:scale-110 inline-block transition"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;

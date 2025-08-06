import { FaLinkedin, FaTwitter, FaGithub, FaTelegram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center px-4 pt-20 sm:pt-28 pb-12 sm:pb-20 min-h-screen"
    >
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-[0_0_50px_2px_rgba(236,72,153,0.8)] hover:shadow-[0_0_50px_2px_black] dark:shadow-[0_0_50px_2px_rgba(236,72,153,0.8)] dark:hover:shadow-[0_0_50px_2px_white] transition duration-300 mb-6">
        <img
          src="/images/photo.jpg"
          alt="Ajay"
          className="object-cover w-full h-full scale-150"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
        Hi, It&apos;s <span className="text-pink-600">Ajay</span>
      </h1>

      <h2 className="text-lg sm:text-xl mt-2 text-pink-500">
        <span className="text-black dark:text-white">I&apos;m a </span>
        Front-End Developer
      </h2>

      <p className="max-w-xl mt-4 text-sm sm:text-base px-2 text-gray-700 dark:text-gray-300">
        I build visually stunning and user-friendly websites that blend
        creativity with functionality. I try to make websites that are{" "}
        <b>both beautiful and functional</b>. I&apos;m passionate about coding,
        design and problem-solving.
      </p>

      <div className="flex space-x-4 mt-6">
        <a
          href="https://linkedin.com/in/ajay-singh-adhikari-039415290"
          className="text-pink-600 border border-pink-600 rounded-full p-3 transition hover:shadow-[0_0_10px_6px_rgba(236,72,153,0.8)] hover:text-black dark:hover:text-white"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://twitter.com"
          className="text-pink-600 border border-pink-600 rounded-full p-3 transition hover:shadow-[0_0_10px_6px_rgba(236,72,153,0.8)] hover:text-black dark:hover:text-white"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://github.com/Ajay-Singh-Adhikari"
          className="text-pink-600 border border-pink-600 rounded-full p-3 transition hover:shadow-[0_0_10px_6px_rgba(236,72,153,0.8)] hover:text-black dark:hover:text-white"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://t.me/NightOwl_zzz"
          className="text-pink-600 border border-pink-600 rounded-full p-3 transition hover:shadow-[0_0_10px_6px_rgba(236,72,153,0.8)] hover:text-black dark:hover:text-white"
        >
          <FaTelegram size={20} />
        </a>
      </div>

      <a
        href="#contact"
        className="mt-6 px-6 py-2 bg-pink-600 text-white dark:text-black dark:bg-white hover:bg-white hover:text-pink-600 dark:hover:bg-black dark:hover:text-pink-500 rounded-full transition hover:scale-105 hover:shadow-[0_0_10px_6px_rgba(236,72,153,0.8)] font-bold"
      >
        Hire Me
      </a>
    </section>
  );
}

import { useSelector } from "react-redux";

export default function Education() {
  const education = useSelector((state) => state.education.data);

  return (
    <section
      id="education"
      className="pb-12 sm:pb-20 px-4 flex flex-col items-center scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-pink-600 mb-8 mt-8 font-mono text-center">
        Education Details
      </h2>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-pink-600 z-0 hidden sm:block" />

        <div className="space-y-12 pl-0 sm:pl-16 relative z-10">
          {education.map((item) => (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <div className="hidden sm:block absolute left-[6px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-pink-600 rounded-full border-2 border-white z-10"></div>

              {/* Card */}
              <div className="bg-white dark:bg-[#131313] border border-black dark:border-white rounded-lg shadow p-4 transition duration-300 ml-0 sm:ml-8">
                <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">
                  {item.heading}
                </h3>
                <span className="text-pink-500 font-medium">{item.year}</span>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                  I {item.school} {item.heading} from{" "}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-pink-500"
                  >
                    {item.school_name}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

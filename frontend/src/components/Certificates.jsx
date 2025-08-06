import { CiCircleChevDown } from "react-icons/ci";

export default function Certificates({ onClose, certificates, url }) {
  return (
    <section id="certificates" className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 mt-4 mb-8 text-center font-mono">
          My Certificates
        </h2>

        <button
          onClick={onClose}
          className="text-4xl ml-3 mb-8 transition hover:text-pink-500 text-pink-600"
        >
          <CiCircleChevDown />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="rounded overflow-hidden hover:scale-105 transition-transform aspect-[4/3] bg-white dark:bg-[#131313]"
            >
              <img
                src={`${url}/images/${item.image}`}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

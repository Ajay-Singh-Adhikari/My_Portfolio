import { useSelector } from "react-redux";

export default function Services() {
  const services = useSelector((state) => state.services.data);
  console.log(services);

  return (
    <section
      id="services"
      className="w-full pb-12 sm:pb-20 px-4 text-center scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-pink-600 my-8 font-mono">
        My Services
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map(({ id, image, name, para }) => (
          <div
            key={id}
            className="bg-white dark:bg-[#131313] border border-black dark:border-white rounded-xl p-6 w-72 transition duration-300 shadow-md hover:scale-105 dark:hover:bg-white dark:hover:text-black hover:shadow-[0_0_23px_10px_black]"
          >
            <div className="w-20 h-20 mx-auto mb-4">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-sm">{para}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

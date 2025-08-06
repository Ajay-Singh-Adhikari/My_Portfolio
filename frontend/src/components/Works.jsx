const Works = ({ videos, url }) => {
  return (
    <section
      id="works"
      className="w-full pb-12 sm:pb-20 px-4 text-center scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-pink-600 mb-8 mt-8 font-mono">
        My Works
      </h2>
      <div className="flex justify-center">
        <div
          className="grid gap-8 max-w-7xl w-full justify-items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {videos.map((video, i) => (
            <div
              key={i}
              className="rounded overflow-hidden border border-black dark:border-white w-full max-w-[400px]"
            >
              <video
                src={`${url}/images/${video.image}`}
                controls
                loop
                autoPlay
                muted
                className="w-full max-h-[400px]"
              />
              <div className="p-2 font-semibold text-center text-black dark:text-white">
                {video.itemName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

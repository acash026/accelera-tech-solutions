import Bentodemo from "./bentogrid";

export const Features = () => {
  return (
    <section
      id="features"
      className="bg-black text-white py-16 sm:py-24 lg:py-28"
    >
      <div className="container px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Title */}
        <h2
          className="text-center font-bold tracking-tighter
                     text-4xl sm:text-5xl lg:text-6xl"
        >
          Everything you need
        </h2>

        {/* Subcopy */}
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-base sm:text-lg lg:text-xl text-white/70">
            We deliver end-to-end technology solutions — from websites and mobile apps to Google Ads and custom software — everything your business needs to grow.
          </p>
        </div>

        {/* Content wrapper */}
        <div
          className="mt-12 sm:mt-16 lg:mt-24
                     flex flex-col items-center justify-center gap-6
                     sm:gap-8"
        >
          {/* Give the demo a responsive frame so it never overflows */}
          <div className="w-full max-w-[1200px]">
            {/* If Bentodemo internally uses grids, this wrapper ensures it scales */}
            <Bentodemo />
          </div>
        </div>
      </div>
    </section>
  );
};

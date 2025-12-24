import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

const Banner = ({ isDark }: any) => {
  return (
    <section
      id="projects"
      className={isDark ? "py-20 bg-gray-800" : "py-20 bg-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center ">
          Posters
        </h2>

        {/* CONTAINER CHANGE:
          1. flex: Enables flexbox.
          2. flex-col: Stacks items vertically on Mobile.
          3. md:flex-row: Places items side-by-side on Desktop.
          4. gap-8: Adds space between the items.
        */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* --- COLUMN 1 --- */}
          {/* w-full on mobile, w-1/2 (50%) on desktop */}
          <div
            className={`w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl ${
              isDark ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            {/* Note: 'h-200' isn't standard Tailwind. I changed it to h-64 (256px) or h-80 (320px) to ensure visibility */}
            <div className="h-full w-full overflow-hidden">
              <img
                src={banner1}
                alt="banner 1"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
              />
            </div>
          </div>

          {/* --- COLUMN 2 --- */}
          <div
            className={`w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl ${
              isDark ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <div className="h-full  w-full overflow-hidden">
              <img
                src={banner2}
                alt="banner 2"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
              />
            </div>
          </div>
   {/* --- COLUMN 3 --- */}
          <div
            className={`w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl ${
              isDark ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <div className="h-full  w-full overflow-hidden">
              <img
                src={banner3}
                alt="banner 2"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
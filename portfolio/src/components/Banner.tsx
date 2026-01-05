import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import banner5 from "../assets/images/banner5.jpg";
import banner6 from "../assets/images/banner6.jpg";
import logo1 from "../assets/images/logo1.jpg";

const Banner = ({ isDark }: any) => {
  return (
    <section
      id="projects"
      className={isDark ? "py-20 bg-gray-800 text-white" : "py-20 bg-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center underline-offset-10 underline">
          Posters
        </h2>

        {/* ROW 1 */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* --- COLUMN 1 --- */}
          <div
            className={`w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl ${
              isDark ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <div className="h-full w-full overflow-hidden" style={{aspectRatio: '4/5'}}> {/* Increased aspect ratio */}
              <img
                src={banner1}
                alt="banner 1"
                className="w-full h-full  transition-transform duration-300 hover:scale-102"
              />
            </div>
          </div>

          {/* --- COLUMN 2 --- */}
          <div
            className={`w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl ${
              isDark ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <div className="h-full w-full overflow-hidden" style={{aspectRatio: '4/5'}}> {/* Increased aspect ratio */}
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
            <div className="h-full w-full overflow-hidden" style={{aspectRatio: '4/5'}}> {/* Increased aspect ratio */}
              <img
                src={banner3}
                alt="banner 3"
                className="w-full h-full  transition-transform duration-300 hover:scale-102"
              />
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* --- COLUMN 4 --- */}
          <div
            className={`w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl ${
              isDark ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <div className="h-full w-full overflow-hidden" style={{aspectRatio: '4/5'}}> {/* Increased aspect ratio */}
              <img
                src={banner4}
                alt="banner 4"
                className="w-full h-full  transition-transform duration-300 hover:scale-102"
              />
            </div>
          </div>

          {/* --- COLUMN 5 --- */}
          <div
            className={`w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl ${
              isDark ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <div className="h-full w-full overflow-hidden  " style={{aspectRatio: '4/5'}} > {/* Increased aspect ratio */}
              <img
                src={banner5}
                alt="banner 5"
                className="w-full h-full  transition-transform duration-300 hover:scale-102"
              />
            </div>
          </div>

          {/* --- COLUMN 6 --- */}
          <div
            className={`w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl ${
              isDark ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <div className="h-full w-full overflow-hidden" style={{aspectRatio: '4/5'}}> {/* Increased aspect ratio */}
              <img
                src={banner6}
                alt="banner 6"
                className="w-full h-full  transition-transform duration-300 hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
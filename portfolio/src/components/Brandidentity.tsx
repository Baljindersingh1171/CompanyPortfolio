import Badge from "./Badge"
import apex from "../assets/images/apex.png"
import madchicken from "../assets/images/madchicken.jpg"
// import notpadia from "../assets/images/notpadia.png"
import mkr from "../assets/images/mkr.png"
import protruck from "../assets/images/protruck.png"
import spicepepper from "../assets/images/spicepepper.jpg"
import taps from "../assets/images/taps.png"
import theurban from "../assets/images/theurban.png"
import logo1 from "../assets/images/logo1.jpg"
import logo2 from "../assets/images/logo2.jpg"
import logpo3 from "../assets/images/logo3.jpg"


const logos = [apex, madchicken,  mkr, protruck, spicepepper, taps, theurban ,logo1,logo2,logpo3];

export default function Brandidentity({ isDark }: { isDark?: boolean }) {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-16">
      <div
        className={`w-full p-10 font-sans rounded-xl ${
          isDark
            ? "bg-gray-700"
            : "bg-[linear-gradient(135deg,#0b1f3a_0%,#143d73_35%,#194a89_65%,#2f6db5_100%)]"
        }`}
      >
        <Badge title="Spineor WebServices" isDark={isDark} />

        <h1 className="text-white text-4xl md:text-5xl font-bold mt-8 mb-12 underline-offset-20  underline">
          Brand Identity
        </h1>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] lg:w-[30%] bg-white rounded-xl shadow-lg p-6 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Brand logo ${index + 1}`}
                className="max-h-48 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

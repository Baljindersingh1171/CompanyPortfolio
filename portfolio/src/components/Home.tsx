import { Mail } from "lucide-react";
import { scrollToSection } from "../utils/common";

const Home = ({ isDark }:any) => {
  return (
    <section
      id="home"
      className={`pt-16 min-h-screen flex items-center
    ${!isDark&& "  bg-[linear-gradient(135deg,#0b1f3a_0%,#143d73_35%,#194a89_65%,#2f6db5_100%)]"
        }`}
    >







      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="max-w-3xl">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-white'}`}>
            Digital Marketing Agency
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Driving Growth Through Data-Driven Marketing Strategies
          </p>
          <p className="text-lg mb-8 opacity-80">
            I help brands grow their online presence, generate quality leads, and increase conversions through smart digital marketing. With a strong focus on strategy, creativity, and analytics, I turn ideas into measurable results.
          </p>

          <p className="text-lg mb-8 opacity-80">    Specialized in SEO, social media marketing, paid advertising, content strategy, and performance tracking—crafting campaigns that connect with the right audience at the right time.</p>
          <div className="flex space-x-4 mt-10">
            <button
              onClick={() => scrollToSection('work')}
              className="bg-[#FFFDF8] text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-[#194a89] cursor-pointer"
             
            >
              Our Work
            </button>
            {/* <button
                        className="border-2 border-white text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-white  hover:text-[#fb8500] hover:bg-opacity-10 transition-colors"
                      >
                        Learn More
                      </button> */}
            {/* <a
                        href="#contact"
                        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                        >
                        <Mail size={40} className="text-white" />
                        <span className="text-lg font-semibold text-white">Contact Me</span>
                        </a> */}
          </div>
          <div className="flex space-x-6 mt-12">

          </div>
        </div>
      </div>
    </section>
  )
}
export default Home;
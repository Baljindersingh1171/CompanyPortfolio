import Badge from "./Badge"
import autopartphone from "../assets/images/autopartphone.png"
import carpart from "../assets/images/carpart.jpg"
import autoparts2 from "../assets/images/autoparts2.jpg"
import tapslogo from "../assets/images/tapslogo.png"

export default function OurWork({isDark}: {isDark?: boolean}) {
  return (
    <>
    <section className="max-w-7xl px-4 mx-auto mt-15">
      <div
        className={` w-full p-10 font-sans ${isDark ? "bg-gray-700" : "bg-[linear-gradient(135deg,#0b1f3a_0%,#143d73_35%,#194a89_65%,#2f6db5_100%)]"}`}
        id="work"
      >
        <Badge title="Spineor WebServices"  className=" text-white" lineColor="bg-white" />

        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-7/12 flex">
            <div className="w-full space-y-6">

              <h1 className="text-white text-4xl font-bold sm:text-[40px] md:text-5xl font-bold mb-7 font-bold underline-offset-10 underline">
                Our Work
              </h1>

              <div className="max-w-[250px]">
                <img src={tapslogo} alt="The Auto Parts Shop" />
              </div>

              <div className="text-gray-300 text-lg ">
                <h1 className="font-bold text-white">Digital Marketing Strategy for TheAutoPartsShop.com</h1>
                <br />
                <p>
                  <span className="font-bold text-white">
                    Project Overview:-
                  </span>
                  The goal of this project was to analyze and optimize the digital
                  presence and marketing effectiveness of TheAutoPartsShop.com —
                  a niche ecommerce auto parts retailer.
                </p>
              </div>

              <h3 className="text-white text-lg font-bold mb-4">
                Design Approach:
              </h3>

              <ul className="space-y-4 text-gray-300 text-lg leading-relaxed list-disc list-inside">
                <li>
                  The approach focused on driving conversions by placing clear
                  CTAs, promotional highlights, and pricing visibility above the
                  fold.
                </li>
                <li>
                  SEO-friendly structure was prioritized through optimized
                  category layouts, keyword-rich product pages, and clean
                  navigation.
                </li>
                <li>
                  The design supports paid marketing campaigns (Google Ads &
                  Shopping).
                </li>
                <li>
                  Trust-building elements such as reviews and secure checkout
                  indicators were emphasized.
                </li>
                <li>
                  A mobile-first experience was implemented.
                </li>
              </ul>

            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="w-full lg:w-5/12 relative px-4 sm:px-8 flex justify-center overflow-hidden">

            <div className="relative w-fit">

              {/* LEFT FLOATING IMAGE */}
              <img
                src={carpart}
                className="absolute -left-5 bottom-60 h-[80px] sm:h-[100px] md:h-[150px] z-20 shadow-xl max-w-40"
              />

              {/* CENTER PHONE */}
              <img
                src={autopartphone}
                className="relative z-10 h-[350px] sm:h-[450px] lg:h-[550px] w-auto"
              />

              {/* RIGHT FLOATING IMAGE */}
              <img
                src={autoparts2}
                className="absolute -right-5 top-20 h-[80px] sm:h-[100px] md:h-[150px] z-20 shadow-xl max-w-40"
              />

            </div>
          </div>

        </div>
      </div>
      </section>
    </>
  )
}

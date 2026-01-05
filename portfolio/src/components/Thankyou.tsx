import Badge from "./Badge"
import laptop from "../assets/images/laptop.png"

export default function Thankyou({isDark}: {isDark?: boolean}) {
  return (
    <div className={`w-full font-sans mt-10 max-w-7xl mx-auto  ${isDark ? "text-white bg-gray-700" : "text-black bg-[linear-gradient(135deg,#0b1f3a_0%,#143d73_35%,#194a89_65%,#2f6db5_100%)]"} `}>
      
      <Badge title="Spineor WebServices" className="px-10 pt-10 text-white" lineColor="bg-white" />

      <div className={`flex flex-col lg:flex-row items-center ${isDark ? "text-white " : "text-black"}`}>

        {/* IMAGE SECTION */}
        <div className="w-full lg:w-5/12 relative p-6 sm:p-8 flex justify-center overflow-hidden">
          <div className="relative">
            <img
              src={laptop}
              className="w-[250px] sm:w-[350px] lg:w-auto mx-auto"
              alt="Laptop"
            />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="w-full lg:w-7/12 p-6 md:p-12 flex items-center">
          <div className="w-full max-w-2xl mx-auto space-y-6 text-center lg:text-left">
            
            <h1 className="text-white text-[28px] sm:text-[36px] lg:text-[45px] font-bold">
              Lets Make Something Great Together
            </h1>

            <p className="text-white text-[28px] sm:text-[36px] lg:text-[45px] text-center lg:text-right mt-[100px]">
              Thankyou
            </p>

          </div>
        </div>

      </div>
    </div>
  )
}

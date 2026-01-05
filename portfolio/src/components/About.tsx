import Badge from "./Badge";
import WhyUs from "./WhyUs";
import image from "@/assets/images/aboutus.jpg";

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  return (
    <>
      <section
        id="about"
        className={`pb-15 flex justify-center items-center mt-15 max-w-7xl mx-auto `}
      >
        {/* Wrapper */}
        <div className="w-full gap-10 px-4">

        
               <Badge title="Spineor WebServices" className="pt-10" />

          <div className="flex flex-col lg:flex-row ">

              <div className="w-full lg:w-5/12 overflow-hidden min-h-[300px] lg:min-h-[700px] mx-auto">
            <img
              src={image}
              className="w-full h-full object-cover"
              alt="About"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12 mx-auto">
       

            <h2 className={`text-4xl font-bold mb-12 text-center underline underline-offset-10 ${isDark ? "text-white" : "text-black"}`}>
              ABOUT US
            </h2>

            <div className="max-w-4xl mx-auto">
              <div
               className="p-8"
                // className={
                //   isDark
                //     ? "bg-gray-800 rounded-xl p-8"
                //     : "bg-gray-50 rounded-xl p-8"
                // }
              >
                <p
                  className={
                    isDark
                      ? "text-lg text-gray-300 mb-6 leading-relaxed"
                      : "text-lg text-gray-700 mb-6 leading-relaxed"
                  }
                >
                  Creating Digital Experiences That Drive Real Business Impact
                  Spineor Webservices is a digital and technology agency dedicated
                  to helping brands grow through strategicmarketing, creative
                  design, and scalable digital solutions.
                </p>

                <p
                  className={
                    isDark
                      ? "text-lg text-gray-300 mb-6 leading-relaxed"
                      : "text-lg text-gray-700 mb-6 leading-relaxed"
                  }
                >
                  We work with businesses to build strong digital identities,
                  improve online visibility, and deliver meaningful user
                  experiences. Our expertise spans digital marketing, branding,
                  web development, and application solutions, allowing us to
                  offer end-to-end services tailored to each client’s goals.
                </p>

                <p
                  className={
                    isDark
                      ? "text-lg text-gray-300 leading-relaxed"
                      : "text-lg text-gray-700 leading-relaxed"
                  }
                >
                  we create solutions that are visually compelling,
                  performance-focused, and built for long-term growth. At
                  Spineor, every project is approached with a clear
                  understanding of business objectives.
                </p>
              </div>
            </div>
          </div>

          </div>
        

        </div>
      </section>

      <WhyUs isDark={isDark} />
    </>
  );
};

export default About;

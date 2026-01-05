import Badge from "./Badge";
import image from "../assets/images/whychoose.png";

const WhyUs = ({ isDark }: { isDark: boolean }) => {
  return (
    <section
      id="about"
      className={` max-w-7xl mx-auto px-4 `}
    >
       <Badge title="Spineor WebServices" isDark={isDark} />

      <div className=" flex flex-col lg:flex-row items-center">
          {/* Left Image */}
      <div className="w-full lg:w-5/12 min-h-[500px] flex justify-center">
        <img
          src={image}
          alt="Why Choose Us"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-7/12 px-4 sm:px-6 lg:px-8">
       

        <h2
          className={`text-4xl font-bold mb-4  underline underline-offset-10 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Why Choose Us
        </h2>

        <p
          className={`text-lg mb-8 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Focused on Quality. Built for Growth.
        </p>

        {/* List */}
        <ul
          className={`space-y-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>
            <h4 className="text-xl font-semibold mb-1">
              Strategic Approach
            </h4>
            <p>
              We align every project with clear business goals, user intent,
              and measurable outcomes.
            </p>
          </li>

          <li>
            <h4 className="text-xl font-semibold mb-1">
              Creative Excellence
            </h4>
            <p>
              Our designs and campaigns are crafted to be visually compelling,
              meaningful, and brand-driven.
            </p>
          </li>

          <li>
            <h4 className="text-xl font-semibold mb-1">
              Performance-Driven Execution
            </h4>
            <p>
              We focus on results, optimizing every solution for engagement,
              conversion, and scalability.
            </p>
          </li>

          <li>
            <h4 className="text-xl font-semibold mb-1">
              End-to-End Expertise
            </h4>
            <p>
              From digital marketing and branding to development and deployment,
              we deliver complete solutions.
            </p>
          </li>

          <li>
            <h4 className="text-xl font-semibold mb-1">
              Collaborative Partnership
            </h4>
            <p>
              We work as an extension of your team, ensuring transparency,
              communication, and long-term value.
            </p>
          </li>
        </ul>

        <p
          className={`mt-8 text-lg leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          At <strong>Spineor Webservices</strong>, we combine strategy,
          creativity, and technology to deliver digital solutions that make a
          real impact. Our goal is to build lasting partnerships and drive
          sustainable business growth.
        </p>
      </div>

      </div>

    
    </section>
  );
};

export default WhyUs;

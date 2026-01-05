import React from 'react';
import Badge from './Badge';

// --- 1. Define Interface for Data ---
interface ServiceItem {
  title: string;
  description: string;
}

// --- 2. Reusable Card Component ---
interface ServiceCardProps {
  title: string;
  description: string;
  isDark?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, isDark }) => {
  return (
    <div className={` rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center h-full ${isDark ? " bg-gray-700 text-white " : "bg-white"}`}>
      <h3 className="text-xl md:text-2xl font-black uppercase mb-4  tracking-wide ">
        {title}
      </h3>
      <p className=" text-sm md:text-base leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
};

// --- 3. Main Services Section Component ---
const Services: React.FC = ({isDark}:any) => {
  // Data transcribed from your image
  const services: ServiceItem[] = [
    {
      title: "Social Media Marketing",
      description: "We craft engaging social media strategies tailored to your brand's voice. Our services include content planning, social media management, paid advertising, and influencer marketing, ensuring your brand reaches and engages the right audience."
    },
    {
      title: "Branding & Identity",
      description: "We help businesses build a strong and recognizable brand. From logo design and brand guidelines to corporate identity materials, we ensure consistency and uniqueness across all platforms, creating a lasting impression."
    },
    {
      title: "Graphic Designing",
      description: "We design eye-catching marketing collateral, infographics, presentations, and digital ads that enhance brand communication. Whether it's brochures, posters, or social media creatives, our designs help businesses stand out in the competitive digital space."
    },
    {
      title: "Video Production & Motion Graphics",
      description: "We create compelling visual stories through brand videos, explainer animations, reels, and advertisements. Our production process covers everything from concept development to final editing, delivering high-quality video content that captivates audiences."
    },
    {
      title: "SEO & Digital Marketing",
      description: "We optimize your brand's online presence with SEO strategies, content marketing, and performance-driven paid ads. Our approach ensures improved search engine rankings, increased website traffic, and better customer engagement."
    },
    {
      title: "Website Development",
      description: "We build modern, responsive, and user-friendly websites that enhance digital presence. Whether it's a corporate website, portfolio, or e-commerce platform, we design solutions that offer seamless navigation and high conversion rates."
    }
  ];

  return (
    // Main Container with Purple Gradient Background
    <section className={`max-w-7xl mx-auto px-4 ${isDark ? "text-white" : "text-gray-800"}`} id="services">
        <Badge title='Spineor WebServices' className=" pt-15" isDark={isDark} />
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 relative">
          <h2 className={`md:text-4xl font-bold   uppercase tracking-wider underline underline-offset-10  ${isDark ? "text-white" : "text-black"} `}>
            Services
          </h2>
          {/* Underline */}
         
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              isDark={isDark}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
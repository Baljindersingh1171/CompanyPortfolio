import React from 'react';
import Badge from './Badge';
import image from "../assets/images/bulb.png";


// You can keep your interface definitions
export interface WorkflowStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface WorkflowCardsProps {
  steps: WorkflowStep[];
  className?: string;
  isDark?: boolean;
}

const WorkflowCard: React.FC<WorkflowCardsProps> = ({ steps, className = '', isDark }) => {
  return (
    // Changed to a Grid layout for better responsiveness than flex
    <div className='max-w-7xl mx-auto px-4 mt-15' id="procedure ">
      <div className='mt-15'>
        <Badge title="Spineor WebServices" className="" />
      </div>

      <h2 className={`text-4xl font-bold mb-12  underline underline-offset-10  ${isDark ? "text-white" : "text-black"}`}>
        PROCEDURE
      </h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {steps.map((step, index) => {
          // Format number to be 01, 02, etc.
          const stepNumber = (index + 1).toString().padStart(2, '0');

          return (
            <div
              key={index}
              className={`group relative ${isDark ? "bg-gray-700 text-white" : "bg-white"} rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Top Purple Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 ${isDark ? "bg-white" : "bg-[#194a89]"} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              {/* Background Number (01, 02...) */}
              <div className={`absolute top-2 right-4 text-6xl font-black ${isDark ? "text-gray-900" : "text-gray-100"} select-none -z-0 ${isDark ? "group-hover:text-white" : "group-hover:text-[#194a89]"}  transition-colors duration-300`}>
                {stepNumber}
              </div>

              {/* Icon & Content Container */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl
  ${isDark  ? "bg-gray-900 group-hover:bg-white group-hover:text-gray-900": "bg-violet-50 group-hover:bg-[#194a89] group-hover:text-white text-[#194a89]"
                    }
  transition-colors duration-300 shadow-sm`}
                >

                  <div className="text-2xl">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-[#194a89]"} mb-3  transition-colors`}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className={`${isDark ? "text-white" : "text-gray-600"} text-sm leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`min-h-screen w-full font-sans mt-15 p-10 max-w-7xl mx-auto ${isDark ? "bg-gray-700" : "bg-[linear-gradient(135deg,#0b1f3a_0%,#143d73_35%,#194a89_65%,#2f6db5_100%)]"}`}>
        <Badge title='Spineor WebServices' className="" lineColor="bg-white" />
        <div className='flex flex-col lg:flex-row items-center '>
          <div className="w-full lg:w-7/12  flex">

            <div className="w-full max-w-2xl mx-auto space-y-6">

              <h1 className='text-white text-[45px] font-bold'>We design intelligent, immersive digital experiences powered by innovation.</h1>


            </div>
          </div>

          <div className="w-full lg:w-5/12  relative p-4 flex flex-col gap-[100px] overflow-hidden">

            {/* Top Text Area */}
            <div className=" z-10 relative">
              <div>
                <img src={image} className='' />
              </div>


            </div>




          </div>

        </div>






      </div>
    </div>
  );
};

export default WorkflowCard;
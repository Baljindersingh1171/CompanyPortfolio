import React from 'react';
import {
  LightBulbIcon,
  PencilIcon,
  CogIcon,
  VideoCameraIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const steps = [
  { title: 'STRATEGY', icon: CogIcon },
  { title: 'CREATIVE', icon: PencilIcon },
  { title: 'INNOVATION', icon: LightBulbIcon },
  { title: 'PRODUCTION', icon: VideoCameraIcon },
  { title: 'REACH', icon: RocketLaunchIcon },
];

const ProcessTimeline = ({ isDark }: any) => {
  return (
    <div className={`py-12 ${isDark ? "text-white" : "text-gray-800"}`}>
      <div className=" text-center">
        {/* <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl mb-4">
          Our Approach
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-12">
          We believe that this approach will drive the project to success.
        </p> */}

        <div className="relative">
          {/* Connecting Line */}
          {/* <div className="absolute bottom-[30px] inset-0 flex items-center " aria-hidden="true">
            <div className="w-full border-t-2 border-violet-200" />
          </div> */}

          <ul className="flex flex-wrap justify-center ">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={index}
                  className="flex flex-col items-center text-center"
                  style={{ width: "25.8%" }}
                >
                  <div className="relative flex h-40 w-40 items-center justify-center bg-white border-4 border-[#194a89] z-10">
                    <Icon className="h-15 w-15 text-[#194a89]" aria-hidden="true" />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold uppercase tracking-wider">
                      {step.title}
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
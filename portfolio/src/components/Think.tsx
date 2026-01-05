import React from 'react';
import { 
  Lightbulb, 
  Settings, 
  Rocket, 
  Video, 
  PenTool 
} from 'lucide-react';
import Badge from './Badge';
import ProcessTimeline from './ProcessTimeline';

// Define the interface for our step data
// (Still needed for the mobile view fallback)
interface ProcessStep {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const Think: React.FC = ({isDark}:any) => {
  // Data for the stages (Used for Mobile view only now)
  const steps: ProcessStep[] = [
    { id: 'strategy', label: 'STRATEGY', icon: <Settings size={32} /> },
    { id: 'creative', label: 'CREATIVE', icon: <PenTool size={32} /> },
    { id: 'innovation', label: 'INNOVATION', icon: <Lightbulb size={32} /> },
    { id: 'production', label: 'PRODUCTION', icon: <Video size={32} /> },
    { id: 'reach', label: 'REACH', icon: <Rocket size={32} /> },
  ];

  return (
    <div className={` max-w-7xl mx-auto px-4 font-sans  ${isDark ? "text-white" : "text-gray-800"} `}>
      <div className='w-full '>
         <Badge title='Spineor WebServices' className=" pt-15" isDark={isDark} />
      </div>
       
      {/* Header Section */}
      <div className="mb-5">
        <div className="inline-block">
            <h2 className={`text-4xl font-bold mb-4 text-center  underline underline-offset-10  ${isDark ? "text-white" : "text-black"} `}>
             Think
          </h2>
        </div>
        
        <p className="  text-lg leading-relaxed">
          Our approach combines user, business and stakeholder requirements through different
          creative production stages to create incredible digital experiences, and we are confident
          that this approach will drive the project to success.
        </p>
      </div>

      {/* ---------- DESKTOP VIEW: SINGLE COMBINED IMAGE ---------- */}
      <div className="w-full hidden md:block">
        {/* TODO: REPLACE THIS SRC WITH YOUR ACTUAL COMBINED IMAGE PATH.
           The image should contain the wave line, all icons, and their labels.
        */}
        {/* <img 
          src="https://placehold.co/1200x500/FFFFFF/5b21b6/png?text=PLACEHOLDER:+Insert+Your+Combined+Wave+and+Icons+Image+Here" 
          alt="Process infographic showing strategy, creative, innovation, production, and reach."
          className="w-full h-auto object-contain"
        /> */}
        <ProcessTimeline isDark={isDark} />
      </div>


      {/* ---------- MOBILE VIEW: VERTICAL LIST FALLBACK ---------- */}
      {/* We keep this because a wide horizontal image looks bad on phones */}
      <div className={`md:hidden flex flex-col gap-8 relative border-l-2 border-gray-200 pl-8 ml-4 `}>
        {steps.map((step) => (
          <div key={step.id} className="relative">
             {/* Dot on the timeline */}
            <div className="absolute -left-[39px] top-0 bg-white border-2 border-[#194a89] rounded-full p-1">
               <div className="w-2 h-2 bg-[#194a89] rounded-full"></div>
            </div>
            
            <div className="flex items-center gap-4 mb-2">
              <div className="text-[#194a89]">
                {step.icon}
              </div>
              <h3 className="font-bold text-xl uppercase">{step.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Think;
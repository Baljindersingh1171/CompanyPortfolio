import React from 'react';
import Badge from './Badge';
import image from "../assets/images/messages.png";

// --- Types ---
interface MessageItem {
  id: string;
  title: string;
  description: string;
  isDark?: boolean;
}

// --- Data ---
const items: MessageItem[] = [
  {
    id: '01',
    title: 'Commitment',
    description: "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort."
  },
  {
    id: '02',
    title: 'Analytical',
    description: "An agency is all about solving clients' problems at a profit. Keep generating solutions whether the problem is large or small in scale."
  },
  {
    id: '03',
    title: 'Consistent',
    description: "Success is not about greatness; it's about consistency. Consistent hard work leads to success. Greatness will come."
  },
  {
    id: '04',
    title: 'Trend',
    description: "The purpose of an agency is to create brands that create customers. Adaptability and flexibility have always been central to content creation."
  }
];

// --- Reusable List Item Component ---
const ListItem: React.FC<MessageItem> = ({ id, title, description, isDark }) => {
  return (
    <div
      className={`w-full ${
        isDark
          ? "bg-gray-700"
          : "bg-[linear-gradient(135deg,#0b1f3a_0%,#143d73_35%,#194a89_65%,#2f6db5_100%)]"
      } rounded-2xl p-6 text-white flex items-center gap-6
      shadow-md
      hover:shadow-[0_25px_50px_rgba(0,0,0,0.45)] hover:shadow-2xl
      transform transition-all duration-300 hover:scale-[1.02]`}
    >
      {/* Number Section */}
      <div className="flex-shrink-0">
        <span className="text-6xl font-bold tracking-tighter">{id}</span>
      </div>

      {/* Vertical Divider */}
      <div className="w-[2px] h-20 bg-white/20 hidden sm:block"></div>

      {/* Content Section */}
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-200 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
};


// --- Main Layout Component ---
const Message: React.FC = ({isDark}:any) => {
  return (
    <div className={` min-h-screen w-full font-sans mt-15 max-w-7xl mx-auto px-4 `} >
       <Badge title='Spineor WebServices' className=""/>

      <div className='flex flex-col lg:flex-row'>

          {/* LEFT PANEL - Visuals */}
      <div className={`w-full lg:w-5/12 ${isDark ? "bg-gray-700" : "bg-[linear-gradient(135deg,#0b1f3a_0%,#143d73_35%,#194a89_65%,#2f6db5_100%)]"} relative p-8 flex flex-col gap-[100px] overflow-hidden`}>
        
        {/* Top Text Area */}
        <div className=" z-10 mt-12 md:ml-8 relative">
          <div className=" flex  border-2 border-white p-6 inline-block mb-4 relative min-h-[250px] " style={{ display: 'flex' }}>
             <h1 className="text-4xl md:text-4xl font-black text-white leading-tight">
              Message.
            </h1>
              <div className=" z-10 flex justify-center  my-8 absolute right-[-39px] max-w-[70%] bottom-[0px]">
          <img 
            src={image}
            alt="3D Character working on laptop"
            className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl"
          />
        </div>
          </div>
          <p className="text-gray-300 text-sm tracking-widest ml-2 absolute right-[14px] bottom-[8px] px-[10px] bg-[#3d0972]">
            from the creator of reformic digital
          </p>
        </div>

        {/* 3D Character Image */}
        {/* NOTE: Replace the src below with your actual transparent PNG of the boy with the laptop.
            I am using a placeholder here.
        */}
      

        {/* Bottom Bullet Points */}
        <div className="relative z-10 mb-8 md:ml-8">
          <ul className="space-y-2">
            {['Commitment', 'Analytical', 'Consistent', 'Trend'].map((item) => (
              <li key={item} className="flex items-center text-white text-2xl font-bold">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative Background Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      {/* RIGHT PANEL - The List */}
   
      <div className={`w-full lg:w-7/12 ${isDark ? "bg-gray-900" : "bg-white"} p-6 md:p-12 flex items-center`}>
      
        <div className="w-full max-w-2xl mx-auto space-y-6">
              
          {items.map((item) => (
            <ListItem 
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              isDark={isDark}
            />
          ))}
            
        </div>
      </div>

      </div>
      
    

    </div>
  );
};

export default Message;
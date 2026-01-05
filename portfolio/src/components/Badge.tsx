type BadgeProps = {
  title: string;
  className?:string
  lineColor?:string
  isDark?:boolean
 
};

export default function Badge({ title, className,lineColor, isDark }: BadgeProps) {
  return (
    <div className={`flex items-center w-full mb-12  flex-row-reverse ${className}`}>
      {/* Line */}
      <div className={`h-[1px]  ${isDark ? "bg-white" : "bg-gray-800"} w-full ml-5   `}></div>
      {/* Badge */}
      <div className="border border-gray-600 rounded px-4 py-1.5 text-sm font-medium text-gray-800 whitespace-nowrap bg-white relative z-10">
        {title}
      </div>
    </div>
  );
}

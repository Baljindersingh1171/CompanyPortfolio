import Badge from "./Badge";
import jwelryphone from "../assets/images/jwelryphone.png";

// import jewelry images
import j1 from "../assets/images/jewelry-1.jpg";
import j2 from "../assets/images/jewelry-2.jpg";
import j3 from "../assets/images/jewelry-3.jpg";
import j4 from "../assets/images/jewelry-4.jpg";
import truck from "../assets/images/truck.jpg"
// import j5 from "../assets/images/jewelry-5.jpg";
// import j6 from "../assets/images/jewelry-6.jpg";

const jewelryImages = [j1, j2, j3, j4];

export default function Work({isDark}: {isDark?: boolean}) {
    return (
        <div className="max-w-7xl mx-auto mt-15 px-4">
            <Badge title="Spineor WebService" isDark={isDark} />
            <h1 className={`text-4xl font-bold sm:text-[40px] lg:text-[45px] font-bold mb-10 underline-offset-10 underline ${isDark ? "text-white" : ""}`}>
                Our Work
            </h1>
            <div className="flex flex-col lg:flex-row gap-12">

                {/* LEFT – PHONE */}
                <div className="w-full lg:w-[35%] flex justify-center">
                    <img
                        src={jwelryphone}
                        alt="Phone mockup"
                        className="
             h-full
            "
                    />
                </div>

                {/* RIGHT – GRID */}
                <div className="w-full lg:w-[65%] flex flex-wrap gap-4 sm:gap-6">
                    {jewelryImages.map((img, index) => (
                        <div
                            key={index}
                            className="
                w-full 
                sm:w-[calc(50%-12px)] 
                h-[180px] sm:h-[200px]
                rounded-xl 
                overflow-hidden 
                shadow-md
              "
                        >
                            <img
                                src={img}
                                alt="Jewelry work"
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>
                    ))}
                </div>

            </div>

            <div className=" min-h-screen w-full font-sans mt-10 max-w-7xl mx-auto">
                <Badge title="Spineor WebServices" className="px-10 pt-10" isDark={isDark} />

                <div className="flex flex-col lg:flex-row">
                      {/* LEFT PANEL - Visuals */}
                <div className="w-full lg:w-5/12  relative p-8 flex flex-col gap-[100px] overflow-hidden">
                    <img src={truck} />
                </div>


                {/* RIGHT PANEL - The List */}

                <div className="w-full lg:w-7/12 p-6 md:p-12 flex items-center">
                    <div className={`w-full max-w-2xl mx-auto space-y-6 ${isDark ? "text-white" : "text-black"}`}>

                        

                        <h1 className={`text-[32px] sm:text-[40px] lg:text-[45px] font-bold leading-tight ${isDark ? "text-white" : ""}`}>
                            I Carry Power. <br /> I Carry Your Future.
                        </h1>

                        <p className=" text-lg leading-relaxed">
                            I’m not just a truck. I’m freedom on wheels — long highways, early
                            mornings, and big ambitions waiting to move forward.
                        </p>

                        <p className=" text-lg leading-relaxed">
                            Before you drive me, you need more than a dream. You need the
                            <span className="font-semibold text-gray-900"> right license</span>,
                            the right training, and the confidence to command the road.
                        </p>

                        <ul className="space-y-3 ">
                            <li>🚛 Expert instructors with real-road experience</li>
                            <li>🛣️ Flexible training programs built for your schedule</li>
                            <li>📜 License-focused, hands-on learning</li>
                        </ul>

                        <p className=" font-semibold text-lg">
                            Get licensed. Take control. Drive your future.
                        </p>

                    </div>
                </div>

                </div>

              


            </div>
        </div>
    );
}

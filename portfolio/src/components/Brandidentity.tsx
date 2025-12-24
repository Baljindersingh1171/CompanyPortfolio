import Badge from "./Badge"
import logo1 from "../assets/images/logo1.jpg"
import logo2 from "../assets/images/logo2.jpg"
import logo3 from "../assets/images/logo3.jpg"
export default function Brandidentity() {
    return (
        <section className="max-w-7xl px-4 mx-auto mt-15">
            <div className="  w-full font-sans p-10 bg-[linear-gradient(135deg,#0b1f3a_0%,#143d73_35%,#194a89_65%,#2f6db5_100%)] ">
            <Badge title='Spineor WebServices'  lineColor="bg-white"/>

            <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-7/12  flex">

                    <div className="w-full ">
                        
                        <h1 className='text-white text-4xl md:text-5xl font-bold mb-7'>Brand Identity</h1>
                        <div>
                            <img src={logo2} className='' />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-5/12  relative p-8 flex flex-col gap-[100px] overflow-hidden">


                    <div className=" z-10 mt-12 md:ml-8 relative">
                        <div>
                            <img src={logo1} className='' />
                        </div>
                        <div>
                            <img src={logo3} className='' />
                        </div>



                    </div>





                </div>

            </div>
            



            </div>
        </section>
    )
}
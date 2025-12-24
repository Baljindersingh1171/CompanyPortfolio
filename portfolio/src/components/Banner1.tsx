import image from "../assets/images/banner1.jpg";
import Badge from "./Badge";
export default function Banner1(){
    return(
        <div className="max-w-7xl mx-auto">
        <Badge title="Spineor WebService" />
          <h1 className=' text-[45px] font-bold mb-10'>Banners</h1>
          <div className="flex gap-10">
              <img src={image} className="w-full"/>
              <img src={image} className="w-full"/>
          </div>
      

        </div>
    )
}
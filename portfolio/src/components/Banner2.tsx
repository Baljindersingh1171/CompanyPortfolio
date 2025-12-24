import image from "../assets/images/banner2.jpg";
import Badge from "./Badge";
export default function Banner2(){
    return(
        <div className="max-w-7xl mx-auto mt-10">
        <Badge title="Spineor WebService " className="px-10 pt-10" />
     
        <img src={image} className="w-full"/>

        </div>
    )
}
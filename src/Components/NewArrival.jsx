import { FaSquare } from "react-icons/fa";
import NewArivalimg1 from "../assets/NewArival1.png";
import NewArivalimg2 from "../assets/NewArival2.png";
import NewArivalimg3 from "../assets/NewArival3.png";
import NewArivalimg4 from "../assets/NewArival4.png";
export default function NewArrival() {
  return (
    <section className="mt-24 ml-8 sm:ml-5">
       <div className="flex mb-6">
        <FaSquare className=" text-2xl text-customRed" />
        <h5 className="text-customRed text-sm font-bold">Featured</h5>
        <div className="ml-5">
          <h1 className="font-bold mb-8 lg:text-3xl mt-10">New Arrival</h1>
        </div>
      </div>
      <div className="flex md:ml-2 lg:justify-center">
        <img src={NewArivalimg1} alt="" className=" h-44 sm:h-96 xl:h-96"/>
        <div className="ml-1">
          <img src={NewArivalimg2} alt="" className="h-20 sm:h-40 sm:max-w-96 md:h-[185px]" />
          <div className="flex mt-3  xl:mt-1 md:mt-2">
            <img src={NewArivalimg3} alt="" className="h-[84px] mr-1 sm:h-40 md:h-44 md:mt-2 lg:h-48 xl:mt-0"/>
            <img src={NewArivalimg4} alt="" className="h-[84px] sm:h-40 md:mt-2  md:h-44 lg:h-48 xl:mt-0"/>
          </div>
        </div>
      </div>
    </section>
  );
}

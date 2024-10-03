import { FaSquare } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
export default function BrowseByCategory() {
  return (
    <section className=" mt-10 ml-5">
      <div className="flex mb-6 ">
        <FaSquare className=" text-2xl text-customRed" />
        <h5 className="text-customRed text-sm font-bold">Category</h5>
        <div className="flex mt-10">
          <h1 className="font-bold mb-8 lg:text-3xl">Browse By Category</h1>
        </div>
      </div>
      <div className="grid grid-cols-2  sm:grid sm:grid-cols-3 sm:gap-10 sm:ml-24 md:ml-12 lg:grid-cols-4  lg:ml-12 xl:grid-cols-6 xl:gap-0 xl:mr-8 2xl:ml-5  mx-8">
        <div className=" bg-white  w-[140px] h-[140px] mb-10  rounded border border-slate-400 hover:bg-customRed">
          <HiOutlineDevicePhoneMobile className=" text-6xl my-10 mx-10" />
        </div>
        <div className=" bg-white  w-[140px] h-[140px] mb-10  rounded border border-slate-400 hover:bg-customRed">
          <HiOutlineDesktopComputer className=" text-6xl my-10 mx-10" />
        </div>
        <div className=" bg-white  w-[140px] h-[140px] mb-10  rounded border border-slate-400 hover:bg-customRed">
          <BsSmartwatch className=" text-6xl my-10 mx-10" />
        </div>
        <div className="w-[140px] h-[140px] mb-10  rounded border border-slate-400 hover:bg-customRed">
          <CiCamera className=" text-6xl my-10 mx-10" />
        </div>  
        <div className=" bg-white  w-[140px] h-[140px] mb-10  rounded border border-slate-400 hover:bg-customRed">
          <CiHeadphones className=" text-6xl my-10 mx-10" />
        </div>
        <div className=" bg-white  w-[140px] h-[140px] mb-10  rounded border border-slate-400 hover:bg-customRed">
          <IoGameControllerOutline className=" text-6xl my-10 mx-10" />
        </div>        
      </div>
    </section>
  );
}

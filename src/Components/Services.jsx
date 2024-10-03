import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiShieldCheck } from "react-icons/hi2";

export default function Services() {
  return (
    <div className="mt-32 flex flex-col items-center sm:flex sm:flex-col sm:items-center sm:mb-5 lg:flex lg:flex-row lg:justify-center"> 
      <div className="mb-5 sm:ml-32 lg:ml-14">
        <div className="w-[60px] h-[60px] bg-black flex justify-center rounded-full border-8 border-customSlat ml-16">
          <TbTruckDelivery className=" text-white text-3xl mt-[6px]" />
        </div>
        <p className=" text-customBlack font-bold">FREE AND FAST DELIVERY</p>
        <p className=" text-[10px] text-customBlack font-sm ">
          Free delivery for all orders over $140
        </p>
      </div>
 
      <div className="mb-5 sm:ml-32">
        <div className="w-[60px] h-[60px] bg-black flex justify-center rounded-full border-8 border-customSlat ml-16">
          <TfiHeadphoneAlt className=" text-white text-3xl mt-[6px]" />
        </div>
        <p className=" text-customBlack font-bold">24/7 CUSTOMER SERVICE</p>
        <p className=" text-[10px] text-customBlack font-sm ">
          Friendly 24/7 customer support
        </p>
      </div>

      <div className="mb-5 sm:ml-32">
        <div className="w-[60px] h-[60px] bg-black flex justify-center rounded-full border-8 border-customSlat ml-16">
          <HiShieldCheck className=" text-white text-3xl mt-[6px]" />
        </div>
        <p className="text-customBlack font-bold">MONEY BACK GUARANTEE</p>
        <p className="text-[10px] text-customBlack font-sm ">
          We reurn money within 30 days
        </p>
      </div>
    </div>
  );
}

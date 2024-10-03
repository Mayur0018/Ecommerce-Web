import { useEffect, useState } from "react";
import { FaSquare } from "react-icons/fa";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import Cart from "./Cart";

export default function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2024-10-10T23:59:59").getTime();

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    };

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="mt-10">
      <div className="flex ml-5">
        <FaSquare className="text-2xl text-customRed" />
        <h5 className="text-customRed text-sm font-bold">Today&apos;s</h5>
        <div className="flex mt-10">
          <h1 className="font-bold mb-4 lg:text-3xl">Flash Sales</h1>
        </div>
      </div>
      <div className="flex sm:flex sm:justify-center justify-center ml-12">
        <div className="flex mb-8">
          <div className="flex flex-col items-center justify-center mr-2 font-bold">
            <div className="text-black-300 uppercase lg:text-1xl lg:font-bold">days</div>
            <div className="font-bold text-black">{timeLeft.days}</div>
          </div>
          <div className="flex flex-col items-center justify-center mr-2 font-bold">
            <div className="text-black-300 uppercase lg:text-1xl lg:font-bold lg:ml-5">hours</div>
            <div className="font-bold text-black">{timeLeft.hours}</div>
          </div>
          <div className="flex flex-col items-center justify-center mr-2 font-bold">
            <div className="text-black-300 uppercase lg:text-1xl lg:font-bold lg:ml-5">minutes</div>
            <div className="font-bold text-black">{timeLeft.minutes}</div>
          </div>
          <div className="flex flex-col items-center justify-center  font-bold">
            <div className="text-black-300 uppercase lg:text-1xl lg:font-bold lg:ml-5">seconds</div>
            <div className="font-bold text-black">{timeLeft.seconds}</div>
          </div>
          <div className="sm:flex sm:relative sm:left-full lg:relative lg:left-48 xl:left-72">
            <FaRegArrowAltCircleLeft className="invisible  lg:visible text bg-white rounded-full mr-8 lg:text-2xl" />
            <FaRegArrowAltCircleRight className="invisible lg:visible text-2xl bg-white rounded-full lg:text-2xl" />
          </div>
        </div>
      </div>

      <Cart />
      <hr className="w-full border-t-2 border-black-900 mt-2" />
    </section>
  );
}

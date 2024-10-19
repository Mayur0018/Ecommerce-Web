import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineSegment } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
export default function Header() {
  const cartIteamsCount = useSelector((state) => state.cart.length);
  const [visible, setunvisible] = useState(false);

  const togleMenu = () => {
    setunvisible(!visible);
  };
  return (
    <header className="mb-10">
      <div className="flex">
        <MdOutlineSegment
          className="text-4xl font-bold sm:hidden mt-4"
          onClick={togleMenu}
        />
        <h1 className=" text-3xl font-bold mt-4 sm:relative sm:top-6 sm:left-4 xl:text-4xl">
          Exclusive
        </h1>
        <div className="flex mt-6  ml-10  sm:relative sm:left-[430px] sm:top-8 md:ml-32 lg:relative lg:left-[580px] xl:left-[910px] 2xl:left-[920px]">
          <CiSearch className=" lg:text-3xl text-2xl" />
          <Link to="/whishList">
            <FaRegHeart className="ml-6 lg:text-3xl text-2xl" />
          </Link>
          <Link to="/cart">
            <div className=" relative">
              <AiOutlineShoppingCart className="ml-6 lg:text-3xl text-2xl" />
              {cartIteamsCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartIteamsCount}
                </span>
              )}
            </div>
          </Link>
          <Link>
            <FaRegCircleUser className="ml-6 lg:text-3xl text-2 text-2xl" />
          </Link>
        </div>
      </div>
      <ul
        className={`w-[330px] ml-8  font-sm sm:font-normal sm:w-full  justify-center gap-10 sm:bg-transparent py-2 sm:py-0 rounded-lg fixed bottom-10  sm:top-14 sm:sticky bg-customRed bg-opacity-85 text-customBlack flex sm:flex  sm:justify-center sm:ml-6 ${
          visible ? "block" : "hidden"
        }`}
      >
        <Link to="/">
          <li className="sm:mr-10 font-bold sm:font-normal">Home</li>
        </Link>
        <Link to="/Contact">
          <li className=" sm:mr-10 font-bold sm:font-normal">Contact</li>
        </Link>
        <Link to="/about">
          <li className="sm:mr-10 font-bold sm:font-normal">About</li>
        </Link>
        <Link to="/SignUp">
          <li className="font-bold sm:font-normal">Sign Up</li>
        </Link>
      </ul>
    </header>
  );
}

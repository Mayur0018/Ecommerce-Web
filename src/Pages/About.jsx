import Header from "../Components/Header";
import AboutImg from "../assets/About.png";
import { AiTwotoneShop } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import { TiShoppingBag } from "react-icons/ti";
import { FaSackDollar } from "react-icons/fa6";
import use1 from "../assets/user1.png";
import use2 from "../assets/user2.png";
import use3 from "../assets/user3.png";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

export default function About() {
  return (
    <>
      <Header />
      <section>
        <div className="sm:flex sm:justify-center sm:mt-20">
          <p className="sm:w-96 font-sm sm:mt-10 sm:mr-20">
            <h1 className="font-bold text-3xl mb-5">Our Story</h1>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons
            custnpmomers across the region. Exclusive has more than 1 Million
            products to offer, growing at a very fast. Exclusive offers a
            diverse assotment in categories ranging from consumer.
          </p>
          <img src={AboutImg} alt="" className="sm:w-[500px]" />
        </div>
        <div className="mt-32 flex flex-col items-center sm:flex sm:flex-col sm:items-center sm:mb-5 lg:flex lg:flex-row lg:justify-center xl:ml-0">
          <div className="mb-5 sm:ml-24 lg:ml-14 bg-customWhite px-14 py-6 rounded-md border border-slate-400 xl:ml-0">
            <div className="w-[60px] h-[60px] bg-black flex justify-center rounded-full border-8 border-customSlat ml-4">
              <AiTwotoneShop className=" text-white text-2xl mt-[10px]" />
            </div>
            <p className=" text-customBlack font-bold text-3xl"> 10.5k </p>
            <p className=" text-[10px] text-customBlack font-sm ">
              Sallers active our site
            </p>
          </div>

          <div className="mb-5 sm:ml-24 lg:ml-14 bg-customRed px-14 py-6 rounded-md border border-slate-400">
            <div className="w-[60px] h-[60px] bg-black flex justify-center rounded-full border-8 border-customSlat ml-6">
              <BiDollarCircle className=" text-white text-2xl mt-[10px]" />
            </div>
            <p className=" text-customBlack font-bold text-3xl ml-6"> 33k </p>
            <p className=" text-[10px] text-customBlack font-sm ">
              Mopnthly Produduct Sale{" "}
            </p>
          </div>
          <div className="mb-5 sm:ml-24 lg:ml-14 bg-customWhite px-14 py-6 rounded-md border border-slate-400">
            <div className="w-[60px] h-[60px] bg-black flex justify-center rounded-full border-8 border-customSlat ml-8">
              <TiShoppingBag className=" text-white text-2xl mt-[10px]" />
            </div>
            <p className=" text-customBlack font-bold text-3xl ml-6"> 45.5k </p>
            <p className=" text-[10px] text-customBlack font-sm ">
              Customer active in our site
            </p>
          </div>
          <div className="mb-5 sm:ml-24 lg:ml-14 bg-customWhite px-14 py-6 rounded-md border border-slate-400">
            <div className="w-[60px] h-[60px] bg-black flex justify-center rounded-full border-8 border-customSlat ml-8">
              <FaSackDollar className=" text-white text-2xl mt-[10px]" />
            </div>
            <p className=" text-customBlack font-bold text-3xl ml-8"> 25k </p>
            <p className=" text-[10px] text-customBlack font-sm ">
              Anual gross sale in our site
            </p>
          </div>
        </div>
        <div className=" flex justify-center gap-2 sm:gap-10 mt-20">
          <div className="ml-2">
            <img src={use1} alt="" className="sm:w-64" />
            <h1 className=" font-medium sm:font-bold sm:text-2xl mt-5">Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <div className="flex gap-4 mt-2">
            <CiTwitter className="sm:text-2xl" />
            <CiInstagram className="sm:text-2xl"/>
            <CiLinkedin className="sm:text-2xl"/>
            </div>
          </div>
          <div>
            <img src={use2} alt="" className="sm:w-64" />
            <h1 className=" font-medium sm:font-bold sm:text-2xl mt-5">Emma Watson</h1>
            <p>Managing Director</p>
            <div className="flex gap-4 mt-2">
            <CiTwitter className="sm:text-2xl" />
            <CiInstagram className="sm:text-2xl"/>
            <CiLinkedin className="sm:text-2xl"/>
            </div>
          </div>
          <div>
            <img src={use3} alt="" className="sm:w-64" />
            <h1 className="font-medium sm:font-bold sm:text-2xl mt-5">Will Smith</h1>
            <p>Product Designer</p>
            <div className="flex gap-4 mt-2">
            <CiTwitter className="sm:text-2xl" />
            <CiInstagram className="sm:text-2xl"/>
            <CiLinkedin className="sm:text-2xl"/>
            </div>
          </div>
        </div>
        <Services />
        <Footer />
      </section>
    </>
  );
}

import cart1 from "../assets/cart9.png";
import cart2 from "../assets/cart10.png";
import cart3 from "../assets/cart11.png";
import cart4 from "../assets/cart12.png";
import cart5 from "../assets/cart13.png";
import cart6 from "../assets/cart14.png";
import cart7 from "../assets/cart15.png";
import cart8 from "../assets/cart16.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/CartSlice";
import { removeToCart } from "../store/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
// import axios from "axios";
// import { useEffect, useState } from "react";
export default function ExploreOurProducts() {
  // const [Product, SetProduct] = useState([]);
  // const Items = [
  //   {
  //     id: 6,
  //     ProductImg: cart1,
  //     ProductName: "Breed Dry Dog Food",
  //     ProductPrice: 123,
  //   },
  //   {
  //     id: 7,
  //     ProductImg: cart4,
  //     ProductName: "Quilted Satin Jacket",
  //     ProductPrice: 960,
  //   },
  //   {
  //     id: 8,
  //     ProductImg: cart3,
  //     ProductName: "ASUS FHD Gaming Laptop",
  //     ProductPrice: 370,
  //   },
  //   {
  //     id: 9,
  //     ProductImg: cart2,
  //     ProductName: "CANON EOS DSLR Camera ",
  //     ProductPrice: 375,
  //   },
  //   {
  //     id: 10,
  //     ProductImg: cart5,
  //     ProductName: "CANON EOS DSLR Camera ",
  //     ProductPrice: 375,
  //   },
  //   {
  //     id: 11,
  //     ProductImg: cart6,
  //     ProductName: "GP11 Shooter USB Gamepad ",
  //     ProductPrice: 375,
  //   },
  //   {
  //     id: 12,
  //     ProductImg: cart7,
  //     ProductName: "Jr. Zoom Soccer Cleats",
  //     ProductPrice: 375,
  //   },
  //   {
  //     id: 13,
  //     ProductImg: cart8,
  //     ProductName: "Kids Electric Car  ",
  //     ProductPrice: 375,
  //   },
  // ];
  // useEffect(() => {
  //   axios
  //     .get("https://api.escuelajs.co/api/v1/products")
  //     .then((response) => {
  //       SetProduct(response.data.slice(25, 35));
  //     })
  //     .catch((err) => {
  //       console.log("Data Not Fetched0", err);
  //     });
  //   console.log(Product);
  // }, []);
 
  const {Products} = useData();

  
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart(item) {
    dispatch(addToCart(item));
  }
  function handleRemoveCart(item) {
    dispatch(removeToCart(item));
  }

  const Navigate = useNavigate();

  const handlCartDetails = (ProductIteams) => {
    Navigate(`cartdetail/${ProductIteams.id}`, { state: ProductIteams });
  };

  return (
    <section className="ml-2 mr-1 mt-10">
      <div className="flex">
        <FaSquare className=" text-2xl text-customRed" />
        <h5 className="text-customRed text-sm font-bold">Our Products</h5>
        <div className="flex ml-6">
          <h1 className="font-bold mb-8 lg:text-3xl mt-10">
            Explore Our Products
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:ml-24 md:ml-4 lg:grid lg:grid-cols-4 lg:gap lg:ml-10 lg:mr-0 xl:grid xl:grid-cols-5 xl:gap-0  mx-8">
        {Products.map((ProductIteams) => (
          <div key={ProductIteams.id}>
            <img
              src={ProductIteams.images[0]}
              alt="cart1img"
              className=" bg-gray-200 w-full lg:w-48"
              onClick={() => handlCartDetails(ProductIteams)}
            />
            {cart.some((item) => item.id === ProductIteams.id) ? (
              <button
                type="button"
                className="text-white bg-customRed   hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-sm w-full lg:w-48 px-3 py-2 text-center flex justify-center  items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30"
                onClick={() => handleRemoveCart(ProductIteams.id)}
              >
                Remove To Cart
              </button>
            ) : (
              <button
                type="button"
                className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-sm w-full lg:w-48 px-3 py-2 text-center flex justify-center  items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30"
                onClick={() => handleAddToCart(ProductIteams)}
              >
                <AiOutlineShoppingCart className="text-2xl font-bold" />
                Add To Cart
              </button>
            )}

            {/* second Method */}
            {/* <button
              type="button"
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-sm w-full lg:w-48 px-3 py-2 text-center flex justify-center  items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30"
              onClick={() =>
                cart.some((item) => item.id === ProductIteams.id)
                  ? handleRemoveCart(ProductIteams.id)
                  : handleAddToCart(ProductIteams)
              }
            >
              {cart.some((item) =>
                item.id === ProductIteams.id
                  ? "Remove From Cart"
                  : "Add To Cart"
              )}
            </button> */}
            <p className="font-bold mt-3">{ProductIteams.title}</p>
            <p className="text-customRed font-bold">${ProductIteams.price}</p>
            <div className="flex">
              <FaStar className=" text-customYellow" />
              <FaStar className=" text-customYellow" />
              <FaStar className=" text-customYellow" />
              <FaStar className=" text-customYellow" />
              <FaStarHalfStroke className=" text-customYellow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// import cart1 from "../assets/cart1.png";
// import cart2 from "../assets/cart2.png";
// import cart3 from "../assets/cart3.png";
// import cart4 from "../assets/cart4.png";
import { FaLeaf, FaStar } from "react-icons/fa6";
// import { ToastContainer, toast } from 'react-toastify';
import { FaStarHalfStroke } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/CartSlice";
import { removeToCart } from "../store/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useData } from "../context/DataContext";
export default function Cart() {
  const { faleshSales } = useData();
  // const Items = [
  //   {
  //     id: 1,
  //     ProductImg: cart1,
  //     ProductName: "HAVIT HV-G92 Gamepad",
  //     ProductPrice: 123,
  //   },
  //   {
  //     id: 2,
  //     ProductImg: cart2,
  //     ProductName: "AK-900 Wired Keyboard",
  //     ProductPrice: 960,
  //   },
  //   {
  //     id: 3,
  //     ProductImg: cart3,
  //     ProductName: "IPS LCD Gaming Monitor",
  //     ProductPrice: 370,
  //   },
  //   {
  //     id: 4,
  //     ProductImg: cart4,
  //     ProductName: "S-Series Comfort Chair ",
  //     ProductPrice: 375,
  //   },
  //   {
  //     id: 5,
  //     ProductImg: cart4,
  //     ProductName: "S-Series Comfort Chair ",
  //     ProductPrice: 375,
  //   },
  // ];

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const [showPopUp, SetShowPopUp] = useState(false);
  const [popUpMessage, SetPopupMessage] = useState("");
  function handleAddToCart(item) {
    SetPopupMessage(`${item.title} added To Cart!`);
    SetShowPopUp(true);
    dispatch(addToCart(item));
    setTimeout(() => SetShowPopUp(false), 3000);
  }
  function handleRemoveCart(item) {
    SetPopupMessage(`${item.title} Remove To Cart!`);
    SetShowPopUp(true);
    dispatch(removeToCart(item));
    setTimeout(() => SetShowPopUp(false), 3000);
  }

  const Navigate = useNavigate();

  const handleDetails = (ProductIteams) => {
    Navigate(`/cartdetail/${ProductIteams.id}`, { state: ProductIteams });
  };
  
  return (
    <section>
      <div className="grid grid-cols-2 gap-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:ml-24 md:ml-4 lg:grid lg:grid-cols-4 lg:gap lg:ml-10 lg:mr-0 xl:grid xl:grid-cols-6 xl:gap-0 mx-8">
        {faleshSales.map((ProductIteams) => (
          <div key={ProductIteams.id}>
            <img
              src={ProductIteams.images}
              alt="cart1img"
              className=" bg-gray-200  w-full lg:w-48"
              onClick={() => handleDetails(ProductIteams)}
            />
            {cart.some((item) => item.id === ProductIteams.id) ? (
              <button
                type="button"
                className="text-white bg-customRed   hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-sm w-full lg:w-48 px-3 py-2 text-center flex justify-center  items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30"
                onClick={() => handleRemoveCart(ProductIteams)}
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
                    : handleAddToCart(`ProductIteams`)
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
      {showPopUp && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white rounded-lg shadow-lg p-4">
          <p>{popUpMessage}</p>
        </div>
      )}
      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="bg-gradient-to-r text-white bg-customRed  rounded-sm  text-sm px-5 py-3 sm:ml-52 md:ml-0"
        >
          View All Products
        </button>
      </div>
    </section>
  );
}

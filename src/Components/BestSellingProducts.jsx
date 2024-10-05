// import cart1 from "../assets/cart5.png";
// import cart2 from "../assets/cart6.png";
// import cart3 from "../assets/cart7.png";
// import cart4 from "../assets/cart8.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/CartSlice";
import { removeToCart } from "../store/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
export default function BestSellingProducts() {
  const { data2 } = useData();
  console.log(data2);

  // const Items = [
  //   {
  //     id: 14,
  //     ProductImg: cart1,
  //     ProductName: "The north coat",
  //     ProductPrice: 123,
  //   },
  //   {
  //     id: 15,
  //     ProductImg: cart4,
  //     ProductName: "Gucci duffle bag",
  //     ProductPrice: 960,
  //   },
  //   {
  //     id: 16,
  //     ProductImg: cart3,
  //     ProductName: "Small BookSelf",
  //     ProductPrice: 370,
  //   },
  //   {
  //     id: 17,
  //     ProductImg: cart2,
  //     ProductName: "RGB liquid CPU Cooler",
  //     ProductPrice: 375,
  //   },
  //   {
  //     id: 18,
  //     ProductImg: cart1,
  //     ProductName: "The north coat",
  //     ProductPrice: 123,
  //   },
  // ];
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart(item) {
    dispatch(addToCart(item));
  }
  function handleRemoveCart(item) {
    dispatch(removeToCart(item));
  }
  const Navigate = useNavigate();

  const handleCartDetails = (ProductIteams) => {
    Navigate(`cartdetail/${ProductIteams.id}`, { state: ProductIteams });
  };
  return (
    <section className="ml-2 mr-1 mt-10 mb-10">
      <div className="flex mb-6">
        <FaSquare className=" text-2xl text-customRed" />
        <h5 className="text-customRed text-sm font-bold">This Month</h5>
        <div className="flex ml-6 mt-10">
          <h1 className="font-bold mb-8 lg:text-3xl">Best Selling Products</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:ml-24 md:ml-4 lg:grid lg:grid-cols-4 lg:gap lg:ml-10 lg:mr-0 xl:grid xl:grid-cols-5 xl:gap-0  mx-8">
        {data2.map((ProductIteams) => (
          <div key={ProductIteams.id}>
            <img
              src={ProductIteams.image}
              alt="cart1img"
              className=" bg-gray-200 w-full lg:w-48"
              onClick={() => handleCartDetails(ProductIteams)}
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
            <p className="font-bold mt-3">{ProductIteams.name}</p>
            <p className="text-customRed font-bold">
              ${ProductIteams.ProductPrice}
            </p>
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

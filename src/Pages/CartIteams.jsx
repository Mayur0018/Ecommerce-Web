import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartItems() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    if (cart.length) {
      setTotalCart(cart.reduce((acc, curr) => acc + curr.ProductPrice, 0));
    }
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <>
      <Header />
      {cart && cart.length ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cart.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      alt={product.ProductName}
                      src={product.ProductImg}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{product.ProductName}</h3>
                        <p className="ml-4">${product.ProductPrice}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-gray-200 py-6 mt-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total Price</p>
              <p>${totalCart}</p>
            </div>
            <div className="mt-6">
              <Link to="/">
                <button className="w-full bg-customRed text-white py-3 rounded-sm text-sm">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-gradient-to-r text-white bg-customRed rounded-sm text-sm px-5 py-3">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

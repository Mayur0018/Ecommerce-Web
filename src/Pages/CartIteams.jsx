import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  incrementIteamQunity,
  decrementItemQuantity,
} from "../store/slices/CartSlice.js";
export default function CartItems() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    if (cart.length) {
      setTotalCart(
        cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
      );
    }
  }, [cart]);

  console.log(cart, totalCart);
  const dispatch = useDispatch();

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51Pb06dK34Ud4xF07VVRmQtWJ3JmbPX9e1jtIEox6jbuFgYVmRJLa0lyBlSPMXZdEevLhfD4KgDkkPEzCaEs6Zgfm009GIZ7OUs"
    );

    const body = {
      products: cart,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(`${"http://localhost:5000"}/create-checkout-session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log("result.error");
    }
  };
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
                      alt={product.title}
                      src={product.images}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{product.title}</h3>
                        <button
                          onClick={() =>
                            dispatch(decrementItemQuantity(product.id))
                          }
                          className="px-2 py-1 bg-gray-200"
                        >
                          -
                        </button>
                        <span className="mx-2">{product.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch(incrementIteamQunity(product.id))
                          }
                          className="px-2 py-1 bg-gray-200"
                        >
                          +
                        </button>
                        <p className="ml-4">${product.price}</p>
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
                <button
                  className="w-full bg-customRed text-white py-3 rounded-sm text-sm"
                  onClick={makePayment}
                >
                  Make Payment
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

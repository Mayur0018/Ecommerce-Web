import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-700 mb-8">Thank you for your purchase. Your order is being processed.</p>
      
      <Link to="/">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

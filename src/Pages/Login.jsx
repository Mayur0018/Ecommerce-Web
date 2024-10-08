import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SideImg from "../assets/SignUp.png";

export default function Login() {
  return (
    <>
      <Header />
      <section>
        <div className="sm:grid sm:grid-cols-2">
          <img
            src={SideImg}
            alt=""
            className="w-96 sm:w-[600px] sm:ml-48 sm:mb-8"
          />
          <div className="relative mx-auto w-full max-w-md  px-6 pt-10 pb-8 ring-1 ring-gray-900/5 sm:rounded-xl sm:h-[500px] sm:mt-10">
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">
                  Log in to Exclusive{" "}
                </h1>
                <p className="mt-2 text-gray-500">Enter your details below </p>
              </div>
              <div className="mt-5">
                <form action="">
                  <div className="relative mt-6">
                    <input
                      type="number"
                      name="Email or Phone Number"
                      id="Email or Phone Number"
                      placeholder="Email or Phone Number"
                      className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                    <label
                      htmlFor="Email or Phone Number"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Email or Phone Number
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input
                      type="password"
                      name="Password"
                      id="Password"
                      placeholder="Password"
                      className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                    <label
                      htmlFor="Password"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Passwords
                    </label>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-customRed px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                    >
                      Log in
                    </button>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full text-customBlack "
                    >
                      Forgot Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

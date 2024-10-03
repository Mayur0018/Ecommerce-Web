import qrcode from "../assets/Qrcode.png";
import playstore from "../assets/GooglePlay.png";
import appstore from "../assets/appstore.png";

export default function Footer() {
  
  return (
    <>
      <footer className="bg-customBlack">
        <div className="grid grid-cols-2 ml-6  sm:grid sm:grid-cols-3 lg:ml-8 lg:grid-cols-4 xl:grid-cols-5">
          <div className="mt-20">
            <h5 className="text-white text-1xl font-bold">Exclusive</h5>
            <p className="text-white font-bold mt-2">Subscribe</p>
            <p className="text-white text-[12px] mt-2">
              Get 10% off your first order
            </p>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="bg-customBlack rounded-sm border font-normal text-[7px] mt-2"
            />
          </div>
          <div className="mt-20">
            <h5 className="text-white text-1xl font-bold">Support</h5>
            <p className="text-white mt-2">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-white text-sm mt-2">exclusive@gmail.com</p>
            <p className="text-white text-sm mt-2">+88015-88888-9999</p>
          </div>
          <div className="sm:mt-20">
            <h5 className="text-white text-1xl font-bold">Account</h5>
            <p className="text-white text-sm mt-2">My Account</p>
            <p className="text-white text-sm mt-2">Login / Register</p>
            <p className="text-white text-sm mt-2">Cart</p>
            <p className="text-white text-sm mt-2">Wishlist</p>
            <p className="text-white text-sm mt-2">Shop</p>
          </div>
          <div className="lg:mt-20">
            <h5 className="text-white text-1xl font-bold">Quick Link</h5>
            <p className="text-white">Privacy Policy</p>
            <p className="text-white text-sm">Terms Of Use</p>
            <p className="text-white text-sm">FAQ</p>
            <p className="text-white text-sm">Contact</p>
          </div>
          <div className="mt-4 mr-10 xl:mt-20">
            <h5 className="text-white text-1xl font-bold">Download App</h5>
            <p className="text-white text-text-sm">
              Save $3 with App New User Only
            </p>
            <div>
              <img src={qrcode} alt="QR Code" className="w-1" />
              <div className="mt-2 flex mb-5">
                <img src={playstore} alt="Google Play" className="mr-2" />
                <img src={appstore} alt="App Store" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

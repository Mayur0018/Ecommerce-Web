import { useState } from "react";
import Header from "../Components/Header";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    Number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v7q9t77",
        "template_i40oogk",
        e.target,
        "GZZqkhgCl0SYb1Q8g"
      )
      .then(
        (result) => {
          console.log("Email Sent", result.text);
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log("Email Send Error", error.text);
          alert("Failed to Send the Message");
        }
      );
    setFormData({
      name: "",
      lastName: "",
      number: "",
      email: "",
      message: "",
    });
  };
  console.log(sendEmail.vale);
  
  return (
    <>
      <Header />
      <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif]">
        <div className="text-center px-6">
          <h2 className="text-gray-800 text-3xl font-extrabold">Contact Us</h2>
          <p className="text-sm text-gray-500 mt-4">
            Have some big idea or brand to develop and need help?
          </p>
        </div>

        <div className="grid lg:grid-cols-3 items-start gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-12">
          <div className="bg-customWhite rounded-lg p-6 h-full max-lg:order-1">
            <h2 className="text-xl text-customBlack font-bold">
              Contact Information
            </h2>
            <p className="text-sm text-black mt-4">
              Have some big idea or brand to develop and need help?
            </p>

            <ul className="mt-16 space-y-8">
              <li className="flex items-center">
                <a
                  href="javascript:void(0)"
                  className="text-black text-sm ml-4"
                >
                  info@example.com
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="javascript:void(0)"
                  className="text-black text-sm  ml-4"
                >
                  +158 996 888
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="javascript:void(0)"
                  className="text-black text-sm  ml-4"
                >
                  123 Street 256 House
                </a>
              </li>
            </ul>
          </div>

          <div className="p-4 lg:col-span-2">
            <form onSubmit={sendEmail}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                    required
                  />
                </div>  

                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                    required
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="tel"
                    name="Number"
                    value={formData.Number}
                    onChange={handleChange}
                    placeholder="Phone No."
                    className="px-2 py-3 bg-white text-black w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                    required
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="px-2 py-3 bg-white text-black w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                    required
                  />
                </div>

                <div className="relative flex items-center sm:col-span-2">
                  <textarea
                    placeholder="Write Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="px-2 pt-3 bg-white text-black w-full text-sm  border-b border-gray-300 focus:border-blue-500 outline-none"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white bg-customRed hover:bg-customRed"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

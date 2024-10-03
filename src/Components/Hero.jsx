import { useEffect, useState } from "react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
let interval;
export default function Hero() {

  const SliderImgs = [slider1, slider2, slider3, slider4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? SliderImgs.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex === SliderImgs.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    interval = setInterval(() => {
      nextSlide();
      prevSlide()
      clearInterval(interval);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  },);
  return (
    <>
      {/* Slider Section */}
      <div className="relative w-full max-w-6xl mx-auto mt-10">
        <div className="overflow-hidden">
          <img
            src={SliderImgs[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-auto transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Previous Button */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={prevSlide}
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={nextSlide}
        >
          ❯
        </button>

        {/* Dots for navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {SliderImgs.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? "bg-customRed" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

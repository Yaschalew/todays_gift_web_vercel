import { Flex } from "antd";
import {  useEffect, useState } from "react";
import images from "../../constants";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const sliders = [
  { image: `${images.slider5}` },
  { image: `${images.slider6}` },
  { image: `${images.slider4}` },
  { image: `${images.Slide2}` },
  { image: `${images.Slide1}` },
]

function Slide() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const checkNext = () => {
    const labels = document.querySelectorAll("#slider label");

    const nextIndex =
      selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (selectedIndex + 1) % sliders.length;
      setSelectedIndex(newIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedIndex, sliders.length]);

  const check = (index: number) => {
    setSelectedIndex(index);
  };
  const handleDots = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Flex className="lg:pt-0 sm:pt-20  justify-center flex-col ">
      <Flex className="flex-col text-center justify-center p-8 pb-10">
        <p className="font-bold sm:text-4xl text-xl py-2">Seasonal Sales here</p>
        <p className="font-semibold sm:text-[1rem] text-[.8rem]">Unwarp Today's Joy, </p>
        <p className="font-semibold  sm:text-[1rem] text-[.8rem]">Shop the Perfect Present Online!</p>
      </Flex>
      <section id="slider" className=" sm:w-[55vw]  w-[65vw] h-[30vw] ">
        {sliders.map((_, index) => (
          <input
            key={index}
            type="radio"
            name="slider"
            id={`s${index + 1}`}
            checked={selectedIndex === index}
            onChange={() => check(index)}
          />
        ))}
        {sliders.map((image, index) => (
          <label key={index} htmlFor={`s${index + 1}`} id={`slide${index + 1}`}>
            <img className="object-cover fea sm:rounded-3xl rounded-2xl lg:h-[420px] md:h-[320px] h-[220px] sm:w-[110%]" src={image.image} alt={`slide${index + 1}`} />
          </label>
        ))}
      </section>
      <Flex className="justify-center sm:flex hidden xl:pt-8 lg:pt-28 md:pt-20 pt-10 z-10 space-x-5 items-center">
        <Flex className="text-center items-center">
          <button onClick={checkNext} className=" ">
            <IoIosArrowRoundBack size={25} className="text-[#9F9F9F]" />
          </button>
        </Flex>
        <Flex className="space-x-3 ">
          {sliders.map((_, index) =>
            <button onClick={() => handleDots(index)} className={`${index == selectedIndex ? `bg-blue-400 h-[7px] w-[7px] rounded-full` : `bg-[#9F9F9F] h-[8px] w-[8px] rounded-full `}`} />
          )}
        </Flex>
        <Flex className="text-center  items-center">
          <button onClick={checkNext} className="">
            <IoIosArrowRoundForward size={25} className="text-[#9F9F9F]" />
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Slide;

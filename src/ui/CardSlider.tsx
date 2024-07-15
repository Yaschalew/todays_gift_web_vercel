/* eslint-disable react/prop-types */
import { MdOutlineStarPurple500 } from "react-icons/md";
import {  Flex } from "antd";

import { useNavigate } from "react-router-dom";

type Listprops = {
  Products: ProductProps;
};
interface ProductProps {
  id: string;
  brand: string;
  category: string;
  description: string;
  images: [];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

function CardSlider({ Products }: Listprops) {

  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  
  return (
    <Flex className="space-y-2 flex-col md:w-[400px] w-auto h-auto sm:m-4 m-2  ">
      <button onClick={() => handleClick(Products.id)}>
        <img
          alt="example"
          src={Products.thumbnail}
          className="md:h-[320px] sm:w-[690px] w-[100%]  h-[100%] rounded border border-black"
        />
      </button>
      <button  className="truncate lg:pl-[22rem] pl-[7.2rem]">
        <div style={{ backgroundColor: 'white', borderRadius: 6, padding: 8 }} className="absolute sm:top-[21.4rem] top-[12.5rem]">
          <img src='icons/buy.svg' className="hidden sm:inline text-[#2BA0AF]  rounded h-[1.4rem]" />
          <img src='/icons/heart.svg' className="sm:hidden inline text-[#2BA0AF] h-[1.3rem] p-[1.4px] " />
        </div>
      </button>
      <Flex className="flex-col">

        <Flex className=" text-white items-end justify-between flex-wrap">
          <p className="font-semibold text-center capitalize sm:text-[16px] text-[13px] leading-4  truncate">
            Gift Combo
          </p>
          <Flex className="font-semibold text-center capitalize sm:text-[18px] text-[13px] leading-4  truncate">
            <p>{Products.price} ETB</p>
          </Flex>
        </Flex>
        <Flex className="items-end justify-between flex-wrap">
          <div>
            <p className=' text-white sm:text-[1rem] text-[.7rem]'>Gift for him</p>
          </div>
          <Flex className="items-center">
            <MdOutlineStarPurple500 className="text-[#FFC540] " />
            <p className="text-white font-semibold sm:text-[.8rem] text-[.8rem]">{Products.rating}</p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CardSlider;

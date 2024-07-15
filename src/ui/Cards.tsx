/* eslint-disable react/prop-types */
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Flex } from "antd";
// import { IoIosNotifications, IoMdCart } from "react-icons/io";
// import { Progress } from "antd";
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

function Cards({ Products }: Listprops) {
  const navigate = useNavigate();

  const handleClick = (id: string, e: any) => {
    e.preventDefault();
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };
  const handleProduct = (proId: string) => {
    navigate(`/checkout/${proId}`);
    window.scrollTo(0, 0);
  };

  return (
    <Flex className="space-y-2 flex-col  2xl:w-[400px] w-auto  2xl:h-[400px] h-auto  sm:m-4  ">
      <Flex className="items-end justify-end ">
        <button onClick={(e) => handleClick(Products.id, e)} className="b">
          <img
            alt="example"
            src={Products.thumbnail}
            className=" rounded border border-black 2xl:w-[400px] w-auto  2xl:h-[370px] h-auto"
          />
        </button>
        <button
          onClick={() => handleProduct(Products.id)}
          className="absolute sm:p-4 p-2 "
        >
          <div
            style={{ backgroundColor: "white", borderRadius: 7, padding: 4 }}
            className=""
          >
            <img
              src="/icons/buy.svg"
              className="sm:inline hidden text-[#2BA0AF] p-1  lg:h-[1.8rem] h-[1.4rem] "
            />
            <img
              src="/icons/heart.svg"
              className="sm:hidden inline text-[#2BA0AF] p-1  sm:h-[1.8rem] h-[1.4rem] "
            />
          </div>
        </button>
      </Flex>
      <Flex className="flex-col space-y-1">
        <Flex className="items-end justify-between flex-wrap">
          <p className="font-semibold text-center capitalize md:text-[16px] text-[13px] leading-4  truncate">
            Gift Combo
          </p>
          <Flex className="font-semibold text-center capitalize md:text-[18px] text-[13px] leading-4  truncate">
            <p>{Products.price} ETB</p>
          </Flex>
        </Flex>
        <Flex className="items-end justify-between flex-wrap">
          <div>
            <p className="text-[#797979] md:text-[1rem] text-[.8rem]">
              Gift for him
            </p>
          </div>
          <Flex className="items-center">
            <MdOutlineStarPurple500 className="text-[#FFC540] " />
            <p className="font-semibold md:text-[.9rem] text-[.8rem]">
              {Products.rating}
            </p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Cards;

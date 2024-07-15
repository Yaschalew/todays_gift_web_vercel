import { Flex } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const PopularCategory = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  console.log(display)
  const mainCategory = [
    { category: "Birthday", image: "icons/Vector.svg" },
    { category: "Wedding", image: "icons/Group.svg" },
    { category: "Wedding", image: "icons/Group.svg" },
    { category: "Anniversary", image: "icons/anniversary.svg" },
    { category: "Graduation", image: "icons/graducation.svg" },
    { category: "Fun Gift", image: "icons/Fungift Icon.svg" },
    { category: "Fun Gift", image: "icons/Fungift Icon.svg" },
    { category: "View All", image: "icons/View All.svg" },
  ];

  const handleClick = (items: string) => {
    navigate(`/category/${items}`);
    window.scrollTo(0, 0);
  };

  return (
    <Flex
      className="pt-20 sm:pt-0 justify-center space-y-4 px-6 flex-col w-[100%] lg:m-auto"
      onMouseLeave={() => setDisplay(false)}
    >
      <p className="sm:inline hidden font-bold text-center text-3xl">
        Shop from Popular Categories
      </p>
      <p className="sm:hidden inline font-bold  text-xl px-2">
        Popular Categories
      </p>
      <Flex className="sm:p-10 sm:space-x-6 space-x-3 justify-around">
        <Flex className="lg:flex hidden xl:space-x-6 space-x-3.5">
        {mainCategory.map((items, index) => (
          <button key={index}
            onClick={() => handleClick(items.category)}
            className="text-[#37A5B3] text-[1rem] font-semibold "
          >
            <Flex className="flex-col items-center space-y-6 ">
              <Flex className="sm:p-6 p-3 justify-around bg-[#E9F5F7] xl:w-[7rem] w-[6.5rem]  xl:h-[7rem] h-[6.5rem]  rounded-xl">
                <img
                  src={`/${items?.image}`}
                  alt={items.category}
                  className=" text-[#37A5B3] delay-75 h-[4rem] sm:w-[4rem] w-[3rem] hover:scale-110"
                />
              </Flex>
              <p className="font-semibold text-black sm:text-[1rem] text-[0.9rem]">
                {items?.category}
              </p>
            </Flex>
          </button>
            ))}
        </Flex>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2.8,
            },
            410: {
              slidesPerView: 3.5,
            },
            540: {
              slidesPerView: 4.2,
            },
            768: {
              slidesPerView: 5.1,
            },
            860: {
              slidesPerView: 6.1,
            },
            920: {
              slidesPerView: 6.6,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          className="mySwiper flex lg:hidden"
        >
          {mainCategory.map((items, index) => (
            <SwiperSlide key={index}>
              <button
                onClick={() => handleClick(items.category)}
                className="text-[#37A5B3] text-[1rem] font-semibold "
              >
                <Flex className="flex-col items-center space-y-6 ">
                  <Flex className="sm:p-6 p-3 justify-around bg-[#E9F5F7] sm:w-[7rem] md:w-[7rem] w-[6rem] sm:h-[7rem] h-[6rem] rounded-xl">
                    <img
                      src={`/${items?.image}`}
                      alt={items.category}
                      className=" text-[#37A5B3] delay-75 h-[4rem] sm:w-[4rem] w-[3rem] hover:scale-110"
                    />
                  </Flex>
                  <p className="font-semibold text-black sm:text-[1rem] text-[0.9rem]">
                    {items?.category}
                  </p>
                </Flex>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};
export default PopularCategory;

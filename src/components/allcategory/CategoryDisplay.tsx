import { Flex } from "antd";
import images from "../../constants";
import Category from "../../ui/Category";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

interface categorys {
  name: string;
  images: string;
}

const category = [
  { name: "Gifts for Female Friends", images: `${images.C2}` },
  { name: "Gifts for Girlfriends", images: `${images.C1}` },
  { name: "Gifts for Wife", images: `${images.C3}` },
  { name: "Gifts for Mum", images: `${images.C4}` },
  { name: "Gifts for Daughter", images: `${images.C5}` },
  { name: "Gifts for Sister", images: `${images.C6}` },
  { name: "Unusual Gifts for Her", images: `${images.C7}` },
  { name: "Deals for Her", images: `${images.C8}` },
];
const categoryMobile = [
  { name: "Female Friends", images: `${images.C2}` },
  { name: "Girlfriends", images: `${images.C1}` },
  { name: "Wife", images: `${images.C3}` },
  { name: "Mum", images: `${images.C4}` },
  { name: "Daughter", images: `${images.C5}` },
  { name: "Sister", images: `${images.C6}` },
  { name: "Unusual Gifts", images: `${images.C7}` },
  { name: "Deals for Her", images: `${images.C8}` },
];



const CategoryDisplay = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate(`/home`);
    window.scrollTo(0, 0);
  };
  const handleCategory = () => {
    navigate(`/category`);
    window.scrollTo(0, 0);
  };
  const handleClick= (item : string) => {
    navigate(`/category/${item}`);
    window.scrollTo(0, 0);
  };

  return (
    <Flex className="flex-col space-y-10 ">
      <p className="md:flex items-center hidden lg:text-[22px] bg-[#FAF9F6] p-4 text-[#828282] cursor-pointer pl-24">
        <span onClick={() => handleHome()} className="hover:text-[#38A6B4]">Home</span> <span className="px-1 text-[.8rem]">/</span>
        <span onClick={() => handleCategory()} className="text-[#38A6B4] px-21"> Categories </span>
      </p>
      <Flex className="sm:px-10 px-5   flex-col md:space-y-10 space-y-3">
        <Flex className="md:px-14 justify-between md:items-center flex-col md:flex-row">
          <p className="font-bold md:text-[32px] sm:text-[24px] text-[20px]">
            Gifts For Her
          </p>
        </Flex>
        <Flex className="flex-col-reverse md:flex-col ">
          <Flex>
            <Flex className="xl:grid hidden space-y-2 space-x-4  grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-5  place-items-center">
              {category?.map((items: categorys) => (
                <Category name={items.name} images={items.images} />
              ))}
            </Flex>
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1.8,
                },
                440: {
                  slidesPerView: 2.3,
                },
                533: {
                  slidesPerView: 2.7,
                },
                640: {
                  slidesPerView: 2.5,
                },
                1024: {
                  slidesPerView: 3.2,
                },
              }}
              spaceBetween={20}
              className="mySwiper xl:hidden inline w-[100%]  me-1"
            >
              {categoryMobile?.map((items: categorys) => (
                <SwiperSlide>
                  <Category name={items.name} images={items.images} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Flex>
          <Flex className="md:justify-end items-center pb-4">
            <img
              src={images.banner}
              alt="banner 1"
              className="object-cover sm:w-[96.8%] w-[99%] sm:h-[90px] h-[100px] md:h-auto rounded"
            />
            <Flex className="justify-between md:pb-10 pb-16 items-start space-y-10 md:space-y-0 ">
              <p className="absolute xl:left-[28rem] lg:left-[20rem] md:left-[10rem] sm:left-12 left-8 text-white lg:text-4xl md:text-3xl sm:text-2xl text-[1.2rem] font-bold md:pl-28 ">
                Get an Exclusive Deal For Her
              </p>
              <button onClick={() => handleClick("For her")}  className="absolute md:left-24 sm:left-12 left-8 text-[#60B7C3] bg-white sm:px-4 px-2 md:py-2 sm:py-1 py-0.5 rounded">
                View All
              </button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CategoryDisplay;

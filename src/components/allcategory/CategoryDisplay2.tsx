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
  { name: "For Him", images: `${images.C2}` },
  { name: "For Her", images: `${images.C1}` },
  { name: "For Him", images: `${images.C3}` },
  { name: "For Her", images: `${images.C4}` },
  { name: "For Him", images: `${images.C5}` },
  { name: "For Her", images: `${images.C6}` },
  { name: "For Him", images: `${images.C7}` },
  { name: "For Her", images: `${images.C8}` },
];

const CategoryDisplay2 = () => {
  const navigate = useNavigate();
  const handleClick= (item : string) => {
    navigate(`/category/${item}`);
    window.scrollTo(0, 0);
  };

  return (
    <Flex className="sm:px-10 px-5  md:py-6 flex-col md:space-y-10 space-y-3">
      <Flex className="md:px-14 justify-between md:items-center flex-col md:flex-row">
        <p className="font-bold md:text-[32px] sm:text-[24px] text-[20px]">
          Gifts For Him
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
              533:{
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
            src={images.banner2}
            alt="banner 1"
            className="object-cover sm:w-[96.8%] w-[99%] sm:h-[90px] h-[100px] md:h-auto rounded"
          />
          <Flex className="justify-between md:pb-10 pb-16 items-start space-y-10 md:space-y-0 ">
            <p className="absolute xl:left-[28rem] lg:left-[20rem] md:left-[9rem] sm:left-12 left-8 text-white lg:text-4xl md:text-3xl sm:text-2xl text-[1.2rem] font-bold md:pl-28 ">
            Get an Exclusive Deal For Him
          </p>
            <button onClick={() => handleClick("For him")} className="absolute md:left-24 sm:left-12 left-8 text-[#60B7C3] bg-white sm:px-4 px-2 md:py-2 sm:py-1 py-0.5 rounded">
              View All
            </button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default CategoryDisplay2;

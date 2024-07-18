import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import images from "../../constants";
import Category from "../../ui/Category";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
interface categorys {
  name: string;
  images: string;
};

//updated
const category = [
  { name: "Gifts for Female Friends", images: `${images.C2}` },
  { name: "Gifts for Girlfriends", images: `${images.C1}` },
  { name: "Gifts for Wife", images: `${images.C3}` },
  { name: "Gifts for Mum", images: `${images.C4}` },
  { name: "Gifts for Daughter", images: `${images.C5}` },
  { name: "Gifts for Sister", images: `${images.C6}` },
  { name: "Unusual Gifts for Her", images: `${images.C7}` },
  { name: "Deals for Her", images: `${images.C8}` }];
  
  const categoryMobile = [
    { name: "For Him", images: `${images.C2}` },
    { name: "For Her", images: `${images.C1}` },
    { name: "For Him", images: `${images.C3}` },
    { name: "For Her", images: `${images.C4}` },
    { name: "For Him", images: `${images.C5}` },
    { name: "For Her", images: `${images.C6}` },
    { name: "For Him", images: `${images.C7}` },
    { name: "For Her", images: `${images.C8}` }];

function Categories() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category`)
    window.scrollTo(0, 0);
  };

  return (
    <Flex className="md:pb-16 pb-6 flex-col w-[90%] m-auto">
      <Flex className="py-12 justify-between  items-center ">
        <p className="font-[700] md:text-[44px] text-[28px]">All Categories</p>
        <Button className="flex-row text-[#60B7C3] sm:px-6"  onClick={() => handleClick()} >
          View All
        </Button>
      </Flex>
      <Flex className="xl:grid hidden space-y-2 space-x-4  grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-5  place-items-center">
        {category?.map((items: categorys) =>
          <Category name={items.name} images={items.images} />
        )}
      </Flex>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1.8, 
          },
          440: {
            slidesPerView: 2.2, 
          },
          640: {
            slidesPerView: 2.5, 
          },
          // 768: {
          //   slidesPerView: 2.5, 
          // },
          // 860: {
          //   slidesPerView: 2.5,
          // },
          1024: {
            slidesPerView: 3.2, 
          },
        }}
        spaceBetween={20}
        className="mySwiper xl:hidden inline w-[100%]  me-1"
      >
        
        {categoryMobile?.map((items: categorys) =>
        <SwiperSlide>
          <Category name={items.name} images={items.images} />
          </SwiperSlide>
        )}
        
      </Swiper>
    </Flex>
  );
}

export default Categories;

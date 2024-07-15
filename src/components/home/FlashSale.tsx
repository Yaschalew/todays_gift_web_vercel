import { Flex, Spin } from "antd";
import { FaBolt } from "react-icons/fa";
import "./home.css";
import { useProducts } from "../../services/useProduct";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import { useCart } from "./useCart";
import { useNavigate } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";

type ProductProps = {
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

function FlashSale() {
  const { isLoading, product } = useProducts();

  const { addToCart } = useCart();
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  const handleClickCategory = () => {
    navigate(`/category`)
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <Flex className="pt-10 flex-col items-center space-y-20 justify-center">
        <h1 className="font-semibold">Loading ...</h1>
        <Spin />
      </Flex>
    )
  };
  return (
    <Flex className="md:flex-row flex-col overflow-hidden  py-5 mt-10 bg-[rgb(59,186,202)] ">
      <Flex className="flex-row md:flex-col items-center md:items-start space-y-0  md:space-y-6 justify-between md:justify-center bg-[rgb(59,186,202)] sm:px-16 px-8 md:px-10">
        <Flex className="md:flex-col flex-row md:items-start items-center gap-5">
          <div className="bg-white p-2 rounded-full">
            <FaBolt className="text-[#FFC540] md:text-5xl sm:text-4xl text-2xl" />
          </div>
          <Flex className="md:flex-col flex-row sm:space-y-6 md:items-start items-center">
            <Flex className="flex-col w-[150%]">
              <p className="sm:text-5xl md:text-4xl text-2xl text-white sm:font-medium font-extrabold">
                Flash Sale
              </p>
              <p className="text-white font-light sm:p-1 sm:text-[1rem] text-[.8rem]">Ends in 00 : 20 : 34 </p>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <button onClick={() => handleClickCategory()} className="bg-white rounded sm:p-3 sm:px-7 p-2 md:text-[1rem] sm:text-[.9rem] text-[.8rem] text-[#60B7C3] font-semibold" > View All</button>
        </Flex>
      </Flex>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1.8, // When screen is >= 0px
          },
          440: {
            slidesPerView: 2.2, // When screen is >= 0px
          },
          640: {
            slidesPerView: 2.5, // When screen is >= 640px
          },
          768: {
            slidesPerView: 2, // When screen is >= 0px
          },
          860: {
            slidesPerView: 2.5, // When screen is >= 0px
          },
          1024: {
            slidesPerView: 3.2, // When screen is >= 1024px
          },
        }}
        //spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper  sm:w-[100%] md:w-[85%]  w-[100%] me-1"
      >
        {product?.products?.map((products: ProductProps, index: number) => (
          <SwiperSlide key={index}>
            <Flex className="space-y-2  flex-col w-auto h-auto sm:m-4 m-2  ">
              <button onClick={() => handleClick(products.id)}>
                <img
                  alt="example"
                  src={products.thumbnail}
                  className="md:w-[490px] w-[100%] h-[100%] rounded border border-black"
                />
              </button>
              <button onClick={(event) => addToCart(products, event)} className=" ">
                <div style={{ backgroundColor: 'white', borderRadius: 6, padding: 4 }} className="my-icons ">
                  <img src='/icons/buy.svg' className="sm:inline hidden text-[#2BA0AF] p-1  sm:h-[1.8rem] h-[1.4rem] " />
                  <img src='/icons/heart.svg' className="sm:hidden inline text-[#2BA0AF] p-1  sm:h-[1.8rem] h-[1.4rem] " />
                </div>
              </button>
              <Flex className="flex-col">
                <Flex className=" text-white items-end justify-between flex-wrap">
                  <p className="font-semibold text-center capitalize sm:text-[16px] text-[13px] leading-4  truncate">
                    Gift Combo
                  </p>
                  <Flex className="font-semibold text-center capitalize sm:text-[18px] text-[13px] leading-4  truncate">
                    <p>{products.price} ETB</p>
                  </Flex>
                </Flex>
                <Flex className="items-end justify-between flex-wrap">
                  <div>
                    <p className=' text-white sm:text-[1rem] text-[.7rem]'>Gift for him</p>
                  </div>
                  <Flex className="items-center">
                    <MdOutlineStarPurple500 className="text-[#FFC540] " />
                    <p className="text-white font-semibold sm:text-[.8rem] text-[.8rem]">{products.rating}</p>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}

      </Swiper>
    </Flex>
  );
}

export default FlashSale;

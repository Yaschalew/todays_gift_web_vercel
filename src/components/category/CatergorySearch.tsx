import {
  Flex,
  Select,
  Pagination,
} from "antd";
// import type { CheckboxProps } from "antd";
// import { IoStar } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../services/useProduct";
import { MdOutlineStarPurple500 } from "react-icons/md";
// import { useCart } from "../home/useCart";
import Category from "../../ui/Category";
import images from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

type Params = {
  id: string;
};

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
};

const CategorySearch = () => {
  const { product } = useProducts();
  const { id } = useParams<Params>();
  const navigate = useNavigate();
  // const searchParams = product?.products?.filter((item: ProductProps) =>
  //   id === "View All" ? item : item.category === id
  // );
  const searchParams = product?.products;

  // const onChange: CheckboxProps["onChange"] = (e) => {
  //   console.log(`checked = ${e.target.checked}`);
  // };

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

  const filter = [
    `${'Filter'}`,
    "For her",
    "For him",
    "Birthday",
    "Wedding",
    "kids",
    "spritual",
  ];

  const handleClick = (id: string, e: any) => {
    console.log(id);
    e.preventDefault();
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };
  const handleHome= () => {
    navigate(`/home`);
    window.scrollTo(0, 0);
  };
   const handleCategory = () =>{
    navigate(`/category`);
    window.scrollTo(0, 0);

   }

  return (
    <Flex className="lg:pt-[7.2rem] md:pt-24 pt-20 flex-col  space-y-10 ">
      <p className="md:flex items-center hidden lg:text-[22px] bg-[#FAF9F6] p-4 text-[#828282] cursor-pointer pl-24">
        <span onClick={() => handleHome()} className="hover:text-[#38A6B4]">Home</span> <span className="px-1 text-[.8rem]">/</span>
        <span onClick={() => handleCategory()} className="hover:text-[#38A6B4] px-21"> Category </span><span className="px-1 text-[.8rem]">/</span>
        <span className="text-[#38A6B4] px-1">{id}</span>
      </p>
      <Flex className="md:flex hidden w-[80%] m-auto justify-between  items-center flex-col md:flex-row">
        <p className="font-bold lg:text-[30px] text-[22px]">
          Gifts {id} by Recipient
        </p>
      </Flex>
      <Flex className="md:hidden flex w-[90%] m-auto">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2.7,
            },
            440: {
              slidesPerView: 3.7,
            },
            640: {
              slidesPerView: 5.3,
            },
            768: {
              slidesPerView: 6.3,
            },
          }}
          spaceBetween={20}
          className="mySwiper "
        >
          {filter.map((index) => (
            <SwiperSlide>
              <Flex className="cursor-pointer  ">
                <p className="border border-[#CFCFCF] rounded-lg px-3 w-[100%] py-2">{index}</p>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
      <Flex className="flex-col md:space-y-10 w-[90%] m-auto">
        <Flex className="xl:grid hidden  space-y-2 space-x-4  grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-5  place-items-center">
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
              slidesPerView: 2.2,
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
        <Flex className="md:flex hidden space-x-5 justify-between items-center w-[87%] m-auto">
          <Flex className="space-x-4">
            <img src="/icons/Path.svg" alt="path" />
            <p className="text-[32px] font-bold ">Filter</p>
          </Flex>
          <Flex>
            <Select
              placeholder="Sort by: Most Popular"
              style={{ flex: 1, width: 300, height: 45, color: "black" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
          </Flex>
        </Flex>
        <Flex className="md:hidden flex font-bold  text-[22px]">
          <p>Featured Gifts {id}</p>
        </Flex>
        {/* {id == '' ? ( */}
        <Flex className=" justify-center items-center m-auto flex-col">
          <Flex className="  flex-col ">
            <Flex className="md:grid-cols-3 grid-cols-2 grid gap-4 pt-4 px-2 ">
              {searchParams?.map((item: ProductProps, index: number) => (
                <Flex
                  className="space-y-2 flex-col  h-auto xl:m-4 m-1 "
                  key={index}
                >
                  <Flex className="items-end justify-end ">
                    <button onClick={(e) => handleClick(item.id, e)}>
                      <img
                        alt="example"
                        src={item.thumbnail}
                        className="xl:h-[340px] lg:h-[300px]  h-auto xl:w-[340px] lg:w-[300px]  w-auto rounded-xl border border-black"
                      />
                    </button>
                    <button className=" absolute p-4">
                      <Flex className="p-2 rounded-lg bg-[white] items-center">
                        <img
                          src="/icons/heart.svg"
                          className="text-[#2BA0AF]  rounded md:h-[1.3rem] h-[1rem]"
                        />
                      </Flex>
                    </button>
                  </Flex>
                  <Flex className="flex-col">
                    <Flex className="items-end justify-between flex-wrap">
                      <p className="font-semibold text-center capitalize sm:text-[16px] text-[13px] leading-4  truncate">
                        Gift Combo
                      </p>
                      <Flex className="font-semibold text-center capitalize sm:text-[14px] text-[12px] leading-4  truncate">
                        <p>{item.price} ETB</p>
                      </Flex>
                    </Flex>
                    <Flex className="items-end justify-between flex-wrap">
                      <div>
                        <p className="text-[#797979] sm:text-[16px] text-[13px]">
                          Gift for him
                        </p>
                      </div>
                      <Flex className="items-center sm:text-[14px] text-[12px]">
                        <MdOutlineStarPurple500 className="text-[#FFC540]" />
                        <p className="font-semibold  ">{item.rating}</p>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex>
            <Pagination
              className="text-32"
              defaultCurrent={1}
              total={searchParams?.length}
            />
          </Flex>
        </Flex>
        {/* ) : (
          <Flex className="lg:w-[10%] m-auto sm:py-40 py-20">
            <Empty width={300} />
          </Flex>
        )} */}
      </Flex>
    </Flex>
  );
};

export default CategorySearch;

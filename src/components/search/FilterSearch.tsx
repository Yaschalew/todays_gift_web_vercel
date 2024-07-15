import {
  Flex,
  Empty,
  Pagination,
} from "antd";
// import type { CheckboxProps } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../services/useProduct";
import { MdOutlineStarPurple500 } from "react-icons/md";
// import { useCart } from "../home/useCart";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

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

const categoryss = [
  {
    category: "NEW & BESTSELLER",
    subLinks: [
      {
        title: "New",
        link: [
          "Wearable Tech",
          "Books and Literature",
          "Latest Puzzule Bundles",
          "Educational Toys",
        ],
      },
      {
        title: "Bestseller",
        link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"],
      },
      {
        title: "Trending Now",
        link: [
          "Toys and Games",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
    ],
  },
  {
    category: "For Her",
    subLinks: [
      {
        title: "New",
        link: ["Female Friends", "Girlfriends", "Wife", "Mum", "Daughter", "Sister", "Unusual Gifts", "Deals for her"]
      },
      {
        title: "Now",
        link: [
          "Toys and Games",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
      {
        title: "  Her baby",
        link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"],
      },
      {
        title: "Trending Now",
        link: [
          "Toys and Games",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
    ],
  },
  {
    category: "For Him",
    subLinks: [
      {
        title: "New",
        link: [
          "Wearable Tech",
          "Books and Literature",
          "Latest Puzzule Bundles",
          "Educational Toys",
        ],
      },
      {
        title: "Bestseller",
        link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"],
      },
      {
        title: "Trending Now",
        link: [
          "Toys and Games",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
    ],
  },
  {
    category: "Coorporate gift",
    subLinks: [
      {
        title: "New",
        link: [
          "Wearable Tech",
          "Books and Literature",
          "Latest Puzzule Bundles",
          "Educational Toys",
        ],
      },
      {
        title: "Bestseller",
        link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"],
      },
      {
        title: "Trending Now",
        link: [
          "Toys and Games",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
    ],
  },
  {
    category: "Food and Drink",
    subLinks: [
      {
        title: "New",
        link: [
          "Wearable Tech",
          "Books and Literature",
          "Latest Puzzule Bundles",
          "Educational Toys",
        ],
      },
      {
        title: "Bestseller",
        link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"],
      },
      {
        title: "Trending Now",
        link: [
          "Toys and Games",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
    ],
  },
  {
    category: "Baby & kids",
    subLinks: [
      {
        title: "New",
        link: [
          "Wearable Tech",
          "Books and Literature",
          "Latest Puzzule Bundles",
          "Educational Toys",
        ],
      },
      {
        title: "Bestseller",
        link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"],
      },
      {
        title: "Trending Now",
        link: [
          "Toys and Games",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
      {
        title: "Men",
        link: [
          "Toys ",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
    ],
  },
  {
    category: "Experience",
    subLinks: [
      {
        title: "New",
        link: [
          "Wearable Tech",
          "Books and Literature",
          "Latest Puzzule Bundles",
          "Educational Toys",
        ],
      },
      {
        title: "Bestseller",
        link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"],
      },
      {
        title: "Trending Now",
        link: [
          "Toys and Games",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
      {
        title: "Men",
        link: [
          "Toys and Games",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
      {
        title: "Women",
        link: [
          "Toys and Games",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
    ],
  },
  {
    category: "Occasions & Holidays",
    subLinks: [
      {
        title: "New",
        link: [
          "Wearable Tech",
          "Books and Literature",
          "Latest Puzzule Bundles",
          "Educational Toys",
        ],
      },
      {
        title: "Bestseller",
        link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"],
      },
      {
        title: "Trending Now",
        link: [
          "Toys and Games",
          "Subscription Boxes",
          "Mugs and Drinkware",
          "Picture Books",
          "Sunglasses Styles",
        ],
      },
    ],
  },
];

// const filter = [
//   `${'Filter'}`,
//   "For her",
//   "For him",
//   "Birthday",
//   "Wedding",
//   "kids",
//   "spritual",
// ];

const FilterSearch = () => {
  const { product } = useProducts();
  const { id } = useParams<Params>();
  const navigate = useNavigate();
  const [mainCategory, setMainCategory] = useState("");
  const searchParams = product?.products?.filter((item: ProductProps) =>
    id === "View All" ? item : item.category === id
  );

  const findMainCategory = (searchTerm: string) => {
    for (let category of categoryss) {
      for (let subLink of category.subLinks) {
        if (subLink.link.includes(searchTerm)) {
          return category.category;
        }
      }
    }
    return "Search";
  };

  useEffect(() => {
    if (id) {
      const category = findMainCategory(id);
      setMainCategory(category);
    }
  }, [id]);

  // const onChange: CheckboxProps["onChange"] = (e) => {
  //   console.log(`checked = ${e.target.checked}`);
  // };

  const filter = [
    "cultural",
    "for her",
    "for him",
    "fun gifts",
    "home and garden",
    "kids",
    "luxiouries",
    "spritual",
  ];

  const handleClick = (id: string, e: any) => {
    console.log(id);
    e.preventDefault();
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Flex className="flex-col  py-8">
      <Flex className="lg:pt-24 pt-20 space-x-5  bg-[#FAF9F6] p-3 md:flex hidden pl-20">
        <p className="text-[19px] text-[#828282] cursor-pointer ">
          <span className="hover:text-[#38A6B4]">Home</span> /{" "}
          <span className="hover:text-[#38A6B4]">Categories</span> /{" "}
          <span className="hover:text-[#38A6B4]">{mainCategory}</span> /{" "}
          <span className="text-[#38A6B4]">{id}</span>
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
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 6,
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
      {id == '' ? (
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
                        className="xl:h-[340px] lg:h-[300px] sm:h-[230px] h-auto xl:w-[340px] lg:w-[300px] sm:w-[230px] w-auto rounded-xl border border-black"
                      />
                    </button>
                    <button
                      className=" absolute p-4"
                    >
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
      ) : (
        <Flex className="lg:w-[10%] m-auto sm:py-40 py-20">
          <Empty  />
        </Flex>
      )}
    </Flex>
  );
};

export default FilterSearch;

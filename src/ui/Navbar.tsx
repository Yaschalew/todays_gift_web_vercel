import { IoIosNotifications} from "react-icons/io";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { MdOutlineArrowBack } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { Flex, Badge, Button, Menu } from "antd";
import images from "../constants";
import { useState } from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useProducts } from "../services/useProduct";



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


const onChange = (key: string) => {
  console.log(key);
};

const Notification = [
  { image: `${images.gift1}`, title: "Today's Recommendations", description: "Gift recommendations for graduation selected by today's team", time: "8 min" },
  { image: `${images.gift2}`, title: "Valentine's special collection", description: "Trendy valentine Gifts for you ordered by most members", time: "10 min" },
  { image: `${images.gift3}`, title: "Today's Recommendations", description: "Gift recommendations for graduation selected by today's team", time: "18 min" },
]

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All',
    children: (
      <Flex className="flex-col space-y-4">
        {Notification?.map((items, index) =>
          <Flex key={index} className="p-2 sm:space-x-5 space-x-2 bg-[#EEF8F9] hover:bg-[#87D4DD] rounded">
            <img src={items.image} className="sm:h-[110px] h-[85px] sm:w-[35%] w-[115px] rounded" alt="images" />
            <Flex className="flex-col sm:space-y-2 ">
              <p className="font-semibold sm:text-xl">{items.title}</p>
              <p className="text-[#707070] sm:font-semibold sm:text-[1.1rem]">{items.description}</p>
              <p className="text-[#707070]">{items.time}</p>
            </Flex>
          </Flex>
        )}
      </Flex>
    ),
  },
  {
    key: '2',
    label: 'Unread',
    children: (
      <Flex className="flex-col space-y-4">
        {Notification?.map((items, index) =>
          <Flex key={index} className="p-2 sm:space-x-5 space-x-2 bg-[#EEF8F9] hover:bg-[#87D4DD] rounded">
            <img src={items.image} className="sm:h-[110px] h-[85px] sm:w-[35%] w-[115px] rounded" alt="images" />
            <Flex className="flex-col sm:space-y-2 ">
              <p className="font-semibold sm:text-xl">{items.title}</p>
              <p className="text-[#707070] sm:font-semibold sm:text-[1.1rem]">{items.description}</p>
              <p className="text-[#707070]">{items.time}</p>
            </Flex>
          </Flex>
        )}
      </Flex>
    ),
  },
  {
    key: '3',
    label: 'Archived',
    children: (
      <Flex className="flex-col space-y-4">
        {Notification?.map((items, index) =>
          <Flex key={index} className="p-2 sm:space-x-5 space-x-2 bg-[#EEF8F9] hover:bg-[#87D4DD] rounded">
            <img src={items.image} className="sm:h-[110px] h-[85px] sm:w-[35%] w-[115px] rounded" alt="images" />
            <Flex className="flex-col sm:space-y-2 ">
              <p className="font-semibold sm:text-xl">{items.title}</p>
              <p className="text-[#707070] sm:font-semibold sm:text-[1.1rem]">{items.description}</p>
              <p className="text-[#707070]">{items.time}</p>
            </Flex>
          </Flex>
        )}
      </Flex>
    ),
  },

];

const categoryss = [
  {
    category: "NEW & BESTSELLER", subLinks: [
      { title: 'New', link: ["Wearable Tech", "Books and Literature", "Latest Puzzule Bundles", "Educational Toys"] },
      { title: 'Bestseller', link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"] },
      { title: 'Trending Now', link: ["Toys and Games", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] }
    ]
  },
  {
    category: "For Her", subLinks: [
      { title: 'New', link: ["Female Friends", "Girlfriends", "Wife", "Mum", "Daughter", "Sister", "Unusual Gifts", "Deals for her"] },
      { title: 'Now', link: ["Toys and Games", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] },
      { title: '  Her baby', link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"] },
      { title: 'Trending Now', link: ["Toys and Games", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] }
    ]
  },
  {
    category: "For Him", subLinks: [
      { title: 'New', link: ["Wearable Tech", "Books and Literature", "Latest Puzzule Bundles", "Educational Toys"] },
      { title: 'Bestseller', link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"] },
      { title: 'Trending Now', link: ["Toys and Games", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] }
    ]
  },
  {
    category: "Coorporate gift", subLinks: [
      { title: 'New', link: ["Wearable Tech", "Books and Literature", "Latest Puzzule Bundles", "Educational Toys"] },
      { title: 'Bestseller', link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"] },
      { title: 'Trending Now', link: ["Toys and Games", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] }
    ]
  },
  {
    category: "Food and Drink", subLinks: [
      { title: 'New', link: ["Wearable Tech", "Books and Literature", "Latest Puzzule Bundles", "Educational Toys"] },
      { title: 'Bestseller', link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"] },
      { title: 'Trending Now', link: ["Toys and Games", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] }
    ]
  },
  {
    category: "Baby & kids", subLinks: [
      { title: 'New', link: ["Wearable Tech", "Books and Literature", "Latest Puzzule Bundles", "Educational Toys"] },
      { title: 'Bestseller', link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"] },
      { title: 'Trending Now', link: ["Toys and Games", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] },
      { title: 'Men', link: ["Toys ", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] }
    ]
  },
  {
    category: "Experience", subLinks: [
      { title: 'New', link: ["Wearable Tech", "Books and Literature", "Latest Puzzule Bundles", "Educational Toys"] },
      { title: 'Bestseller', link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"] },
      { title: 'Trending Now', link: ["Toys and Games", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] },
      { title: 'Men', link: ["Toys and Games", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] },
      { title: 'Women', link: ["Toys and Games", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] }
    ]
  },
  {
    category: "Occasions & Holidays", subLinks: [
      { title: 'New', link: ["Wearable Tech", "Books and Literature", "Latest Puzzule Bundles", "Educational Toys"] },
      { title: 'Bestseller', link: ["Fashion and Apparel", "Beauty and Personal Care", "Home Deco"] },
      { title: 'Trending Now', link: ["Toys and Games", "Subscription Boxes", "Mugs and Drinkware", "Picture Books", "Sunglasses Styles"] }
    ]
  }
];



function Nabvar() {
  const [notification, setNotification] = useState(false);
  const [searchParams, setSearchParams] = useState<string>('');
  const [display, setDisplay] = useState(false);
  const [mainCategorys, setMainCategorys] = useState('');
  const [menu, setMenu] = useState(false);
  const { product } = useProducts();
  const [notify, setNotify] = useState(false);
  const navigate = useNavigate();
  const uniqueCategories = [...new Set(product?.products?.map((item: ProductProps) => item.category))];
  const uniqueTitles = [...new Set(product?.products?.map((item: ProductProps) => item.title))];
  const params = [...uniqueCategories, ...uniqueTitles];

  const handleDropdownClick = (links: string) => {
    console.log(links);
    navigate(`/search/${links}`);
    setDisplay(false);
    setMenu(false);
    window.scrollTo(0, 0);
  };

  const handledisplay = (list: string) => {
    setMainCategorys(list);
    setDisplay(!display);
  }
  const handleback = () => {
    setDisplay(!display);
  }
  const displayfilter = categoryss.filter((item) => item.category === mainCategorys);

  console.log(displayfilter)

  const handleHome = () => {
    navigate("/home");
    setMenu(false);
    window.scrollTo(0, 0);
  };
  const handlenotify = () => {
    setNotify(!notify);
  }
  const handleSearch = (searchPrams: string) => {
    setSearchParams(searchPrams);
    navigate(`/search/${searchPrams}`);
    window.scrollTo(0, 0);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(event.target.value);
  };
  // const handleprofile = () => {
  //   navigate("/profile");
  //   window.scrollTo(0, 0);

  // }
  const handleClose = () => {
    setSearchParams('');
  }
  const handleMenu = () => {
    setMenu(!menu)
  }




  return (
    <Flex className="flex-col fixed  w-[100%] z-20">
      <Flex className="justify-center bg-[#2BA0AF] space-x-5">
        <p className="text-white p-1">Sale | Save up to Half Price</p>
        <div className="animate-bounce-left text-white p-1 ">{' >>'}</div>
      </Flex>
      <Flex className="justify-between items-center lg:py-2 py-3 bg-white shadow-sm">
        <Flex>
          <button onClick={handleHome} className="lg:inline hidden">
            <img
              src={images.todays}
              className="sm:w-[65px]  w-[35px] sm:mx-12 ml-2"
              alt="logo"
            />
          </button>
          <button className="inline lg:hidden sm:mx-12 ml-2" >
            {menu ? (
              <Flex className="overflow-auto bg-white absolute w-[100%] h-[740px] z-20 top-0 left-0 right-20">
                <Flex className="items-center p-2 w-[100%] justify-between top-0 absolute shadow">
                  {display ?
                    <Flex className="items-center space-x-10">
                      <button onClick={handleback} className="p-2">
                        <MdOutlineArrowBack className=" text-[2rem]" />
                      </button>
                      <p className="text-[#2BA0AF] font-semibold">{displayfilter[0].category}</p>
                    </Flex>
                    :
                    <button onClick={handleHome} className="">
                      <img
                        src={images.todays}
                        className="w-[45px] "
                        alt="logo"
                      />
                    </button>
                  }
                  <button onClick={handleMenu}>
                    <VscChromeClose className=" text-[2rem] " />
                  </button>
                </Flex>
                <Flex className="flex-col pt-16 w-[100%]" >
                  {display ? (
                    <Flex className=" flex-col justify-center h-auto">
                      <p className="bg-[#E9F5F7] p-5 text-[#2BA0AF] font-semibold">View All {displayfilter[0]?.category} Gifts</p>
                      {displayfilter[0]?.subLinks.map((item) =>
                        <Flex className="flex-col items-start py-4 space-y-4 px-7"  >
                          <p className="font-bold">{item.title}</p>
                          {item.link.map((links) =>
                            <p onClick={() => handleDropdownClick(links)} className="cursor-pointer hover:text-[#111111] space-y-1">{links}</p>
                          )}
                        </Flex>
                      )}
                    </Flex>
                  ) : (
                    <Flex className="flex-col p-8 space-y-8 w-[100%]">
                      {categoryss.map((item, index) =>
                        <Flex className="" key={index}>
                          <button onClick={() => handledisplay(item.category)} >
                            <p className="font-semibold hover:underline hover:underline-offset-[4px]">{item.category}</p>
                          </button>
                        </Flex>
                      )}
                    </Flex>
                  )}
                </Flex>
              </Flex>
            ) : (
              <button onClick={handleMenu}>
                <IoMenuOutline className="text-[2rem]" />
              </button>
            )}
          </button>
        </Flex>
        <Flex>
          <label className="relative block">
            <Flex className="flex-col items-center">
              <input
                className="placeholder:text-[#707070] block  lg:w-[603px] md:w-[470px] sm:w-[370px] w-[240px] h-[40px] rounded-full py-2 sm:pl-10 pl-9 sm:pr-3  focus:outline-none border-sky-500  focus:ring-sky-500 ring-1 sm:text-sm"
                placeholder="Search any gift"
                type="text"
                name="search"
                value={searchParams}
                onChange={handleChange}
              />
              {searchParams &&
                <button onClick={handleClose} className="absolute inset-y-0 sm:right-11 right-5 flex items-center pl-2 text-[#74847]">
                  <IoClose />
                </button>
              }
              <button className="absolute inset-y-0 left-0 flex items-center pl-2" onClick={() => handleSearch(searchParams)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"

                >
                  <path fill="#6E6E6E" d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
              </button>
            </Flex>
          </label>
          <Flex className="bg-white absolute top-[7.1rem] flex-col space-y-3 ">
            {params?.filter((item) => {
              const searchTerm = searchParams.toLowerCase();
              const paramslist = (item as string)?.toLowerCase();
              return searchTerm && paramslist.startsWith(searchTerm) && item !== searchTerm;
            })?.slice(0, 20)?.map((item: any) =>
              <div key={item.title} onClick={() => handleSearch(item)} className="px-6 text-[#7E7575] space-y-5 hover:text-black cursor-pointer">{item}</div>
            )}

          </Flex>
        </Flex>
        <Flex className="items-center space-x-1 sm:mr-12 mr-2 ">
          <button onClick={handlenotify}>
            <Flex className="flex-col ">
              <Badge dot offset={[-11, 7]} color="#FFC540">
                <IoIosNotifications className="sm:text-4xl text-3xl text-[#2BA0AF]" />
              </Badge>
            </Flex>
          </button>
          {notify &&
            <Menu className="flex-col absolute top-[6rem] sm:right-10 right-0 p-2 xl:w-[35%] lg:w-[45%] sm:w-[65%]  w-[90%] rounded-lg">
              <Flex className="justify-between items-center">
                <Flex className="sm:space-x-4 space-x-1 items-center  p-1">
                  <p className="p-2 font-semibold sm:text-xl">Notification</p>
                  <Badge count={3} showZero color='#2DABC2' className="sm:text-2xl text-xl" />
                </Flex>
                <Flex className="space-x-5 items-center  z-10">
                  <p className="text-[#2BA0AF] font-semibold cursor-pointer">Mark all as read</p>
                  <MdOutlineMoreHoriz className="text-4xl text-[#8B8B8B] cursor-pointer" onClick={() => (setNotification(!notification))} />
                  {notification &&
                    <Menu className="flex-col absolute top-[4rem] sm:w-[40%] w-[60%] right-10 bg-[#D9D9D9] p-2 rounded-lg">
                      <Flex className="flex-col p-1 space-y-2">
                        <Button size="large" className="text-[#2BA0AF] bg-white font-semibold">Mute Notification</Button>
                        <Button size="large" className="text-[#2BA0AF] bg-white font-semibold">Notification Setting</Button>
                      </Flex>
                    </Menu>
                  }
                </Flex>
              </Flex>
              <Tabs defaultActiveKey="1" className="z-20" items={items} onChange={onChange} />
            </Menu>
          }
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Nabvar;

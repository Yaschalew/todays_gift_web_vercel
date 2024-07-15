import { Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

const CategoryList = () => {
  const navigate = useNavigate();

  const handleDropdownClick = (links: string) => {
    console.log(links);
    navigate(`/search/${links}`);
    window.scrollTo(0, 0);
  };
  const handleDropClick = (category: string) => {
    console.log(category);
    navigate(`/category/${category}`);
    window.scrollTo(0, 0);
  };

  const [display, setDisplay] = useState(false);
  const [mainCategorys, setMainCategorys] = useState("");

  const handledisplay = (list: string) => {
    setMainCategorys(list);
    setDisplay(true);
  };
  const displayfilter = categoryss.filter(
    (item) => item.category === mainCategorys
  );
  return (
    <>
      <Flex className=" pt-28 lg:flex hidden flex-col">
        <Flex className="flex-col " onMouseLeave={() => setDisplay(false)}>
          <Flex className="justify-center md:space-x-6 py-4 bg-[#E9F5F7] w-[100%]">
            {categoryss.map((item, index) => (
              <Flex className="" key={index}>
                <button
                  onMouseEnter={() => handledisplay(item.category)}
                  onClick={() => handleDropClick(item.category)}
                >
                  <p className="font-semibold text-[#2BA0AF] hover:underline hover:underline-offset-[17px] xl:text-[1rem] text-[.9rem]">
                    {item.category}
                  </p>
                </button>
              </Flex>
            ))}
          </Flex>
          <Flex className="justify-center py-5 absolute z-10 top-[10.5rem] bg-white w-[100%] h-[30rem] ">
            {display && (
              <>
                {displayfilter[0].subLinks.map((item, number) => (
                  <Flex
                    className="flex-col items-start py-4 space-y-4 px-7"
                    key={number}
                  >
                    <p className="font-semibold">{item.title}</p>
                    {item.link.map((links) => (
                      <p
                        onClick={() => handleDropdownClick(links)}
                        className="cursor-pointer text-[#757575] hover:text-[#111111] space-y-1"
                      >
                        {links}
                      </p>
                    ))}
                  </Flex>
                ))}
              </>
            )}
          </Flex>
          {/* {items.map((item) => (
            <Dropdown key={item.label}   overlay={
              <Flex className="py-3">
                <Menu className="">
                  <Flex  className="flex-row">
                  {item.children.map(child => (
                    <Menu key={child.key} title={child.label}  className="">
                      <Menu.Item className="flex-row">
                        <p className="font-bold">
                          {child.label}
                        </p>
                      </Menu.Item >
                      {child.links.map(link => (
                        <Menu.Item key={link} >
                          <p className="px-2">
                          {link}
                          </p>
                        </Menu.Item>
                      ))}
                    </Menu>
                  ))}
                  </Flex>
                </Menu>
                
              </Flex>
            } trigger={['hover']}>
              <button className="text-[#37A5B3] text-[1rem] font-semibold ">
                <p className="font-semibold hover:underline hover:underline-offset-[17px]">{item.label}</p>
              </button>
            </Dropdown>
          ))} */}
        </Flex>
      </Flex>
    </>
  );
};

export default CategoryList;

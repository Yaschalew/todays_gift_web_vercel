import { Button, Dropdown, Flex, Menu } from "antd";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GiDiamondRing } from "react-icons/gi";
import { PiGraduationCap } from "react-icons/pi";
import { BsCake } from "react-icons/bs";
import type { MenuProps } from 'antd';
import { TfiGift } from "react-icons/tfi";
import { AiFillAppstore } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Item from "antd/es/list/Item";

const { SubMenu } = Menu;


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
      { title: 'New', link: ["Wearable Tech", "Books and Literature", "Latest Puzzule Bundles", "Educational Toys"] },
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


const items: MenuProps['items'] = [
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <>
        {categoryss.map((items) => (

          <Button type="link" className="text-[#37A5B3] text-[1rem] font-semibold hover:">
            {items.category}
          </Button>
        ))}
      </>
    ),
    key: 'alipay',
    children: []
  },
];

const CategoryList = () => {
  const items = categoryss.map(category => ({
    label: category.category,
    key: category.category,
    children: category.subLinks.map(subLink => ({
      label: subLink.title,
      key: subLink.title,
      links: subLink.link,
    })),
  }));
  const navigate = useNavigate();

  const category = [
    "NEW & BESTSELLER",
    "For Her",
    "For Him",
    "Coorporate gift",
    "Food and Drink",
    "Baby & kids",
    "Experience",
    "Occasions & Holidays",
  ];



  // const mainCategory = [
  //   { category: "Birthday", image:  <GiDiamondRing /> },
  //   { category: "Wedding", image: <GiDiamondRing /> },
  //   { category: "Wedding", image: <GiDiamondRing /> },
  //   { category: "Anniversary", image: <BsCake /> },
  //   { category: "Graduation", image: <PiGraduationCap /> },
  //   { category: "Graduation", image: <PiGraduationCap /> },
  //   { category: "Fun Gift", image: <TfiGift /> },
  //   { category: "Fun Gift", image: <TfiGift /> },
  //   { category: "View All", image: <AiFillAppstore /> }
  // ];
  const mainCategory = [
    { category: "Birthday", image: "icons/Vector.svg" },
    { category: "Wedding", image: "icons/group.svg" },
    { category: "Wedding", image: "icons/group.svg" },
    { category: "Anniversary", image: "icons/anniversary.svg" },
    { category: "Graduation", image: "icons/graducation.svg" },
    { category: "Graduation", image: "icons/graducation.svg" },
    { category: "Fun Gift", image: "icons/Fungift Icon.svg" },
    { category: "Fun Gift", image: "icons/Fungift Icon.svg" },
    { category: "View All", image: "icons/View All.svg" }
  ];


  const handleClick = (items: string) => {
    navigate(`/search/${items}`)
    window.scrollTo(0, 0);
  }
  const handleDropdownClick = (e: any, category: string) => {
    const { key } = e;
    if (key !== category) {
      navigate(`/search/${key}`);
      window.scrollTo(0, 0);
    }
  };
  const [display, setDisplay] = useState(false);
  const [mainCategorys, setMainCategorys] = useState('');
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const handledisplay = (list: string) => {
    setMainCategorys(list)
    setDisplay(true)
  }
  const displayfilter = categoryss.filter((item) => item.category === mainCategorys);
  return (
    <>
      <Flex className=" pt-24  flex-col">
        <Flex className="flex-col " onMouseLeave={() => setDisplay(false)}>
          <Flex className="justify-center md:space-x-8 py-4 bg-[#E9F5F7] w-[100%]">
            {categoryss.map((item, index) =>
              <Flex className="" key={index}>
                <button
                  onMouseEnter={() => handledisplay(item.category)}
                >
                  <p className="font-semibold text-[#2BA0AF] hover:underline hover:underline-offset-[17px]">{item.category}</p>
                </button>
              </Flex>
            )}
          </Flex>
          <Flex className="justify-center py-5 z-10 absolute top-[9.5rem] bg-white w-[100%] h-auto">
            {display &&
              <>
                {displayfilter[0].subLinks.map((item) =>
                  <Flex className="flex-col items-start py-4 space-y-4 px-7"  >
                    <p className="font-semibold">{item.title}</p>
                    {item.link.map((links) =>
                      <p className="cursor-pointer text-[#757575] hover:text-[#111111] space-y-1">{links}</p>
                    )}

                  </Flex>
                )}
              </>
            }
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
        <Flex className="p-10 space-x-8 justify-around" onMouseLeave={() => setDisplay(false)}>
          {mainCategory.map((items) => (
            <button onClick={() => handleClick(items.category)} className="text-[#37A5B3] text-[1rem] font-semibold">
              <Flex className="flex-col items-center">
                <Flex className="p-8 justify-around bg-[#E9F5F7] rounded-xl ">
                  <img src={`/${items?.image}`} alt={items.category} className=" text-[#37A5B3] delay-75 h-[4rem] w-[4rem] hover:scale-110" />
                </Flex>
                <p className="font-semibold">{items?.category}</p>

              </Flex>
            </button>
          ))}
        </Flex>
      </Flex >
    </>
  );
};

export default CategoryList;

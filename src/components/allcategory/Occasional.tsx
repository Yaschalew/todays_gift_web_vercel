import { Flex, Select } from "antd";
import images from "../../constants";
// import Category from "../../ui/Category";
import { useNavigate } from "react-router-dom";

// interface categorys {
//   name: string;
//   images: string;
// }

const category = [
  { name: "Anniversary", images: `${images.C2}` },
  { name: "Apology Gifts", images: `${images.C1}` },
  { name: "Appreciation", images: `${images.C3}` },
  { name: "Baby shower", images: `${images.C4}` },
  { name: "Back to school", images: `${images.C5}` },
  { name: "Birthday", images: `${images.C6}` },
  { name: "Christening", images: `${images.C7}` },
  { name: "Engagment", images: `${images.C8}` },
  { name: "Get-well", images: `${images.C2}` },
  { name: "Graduation", images: `${images.C1}` },
  { name: "Wedding", images: `${images.C3}` },
  { name: "Welcome and Farewell", images: `${images.C4}` },
];

const Occasional = () => {
  const navigate = useNavigate();
  const handleClick= (item : string) => {
    navigate(`/search/${item}`);
    window.scrollTo(0, 0);
  };
  return (
    <Flex className="flex-col w-[95%] m-auto space-y-6">
      <Flex className=" py-6 sm:space-y-0 space-y-4 justify-between sm:flex-row flex-col md:items-center items-start ">
        <Flex className=" justify-between  items-center flex-col md:flex-row">
          <p className="font-bold sm:text-[32px] text-[20px]">Occasional</p>
        </Flex>
        <Flex className="ml-28 sm:ml-0">
        <Select
            placeholder="Sort By: Name"
            style={{ flex: 1, width: 200 }}
            options={[
              { value: "Name", label: "Sort By: Name" },
              { value: "Most Popular", label: "Sort By: Most Popular" },
            ]}
          />
        </Flex>
      </Flex>
      <Flex className=" flex-col space-y-10 ">
        <Flex className="grid sm:grid-cols-4 grid-cols-2 gap-y-8  place-items-center">
          {category.map((items) => (
            <Flex onClick={() => handleClick(items.name)} className=" cursor-pointer flex-col items-center space-y-4">
              <Flex className=" rounded-md bg-cover bg-center lg:w-[220px] md:w-[160px] sm:w-[130px] w-[150px] lg:h-[220px] md:h-[160px] sm:h-[130px] h-[150px]  overflow-hidden">
                <div className=" w-[100%] h-[100%] relative  group">
                  <img
                    src={items.images}
                    alt="Your Image"
                    className="object-cover w-full h-full "
                  />
                </div>
              </Flex>
              <p className="text-black font-[500] lg:text-[25px] md:text-[18.9px] text-[12px] p-2">
                {items.name}
              </p>
            </Flex>
          ))}
        </Flex>
        <Flex className=" sm:pb-20 justify-end items-center w-[93%] m-auto">
          <img src={images.banner4} alt="banner" />
          <p className="absolute lg:text-[56px] md:text-[40px] sm:text-[36px] text-[20px] font-bold font-poppins md:leading-[74px] md:pr-28 sm:pr-16 pr-6">
            Shop the Best Gifts <br /> For Every Occasion
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Occasional;

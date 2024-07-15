import { Flex, Select } from "antd"
import images from "../../constants";
import { useNavigate } from "react-router-dom";

const category = [
  { name: "Coporate Gift", images: `${images.C2}` },
  { name: "Cultural", images: `${images.C1}` },
  { name: "Educational", images: `${images.C3}` },
  { name: "Experience", images: `${images.C4}` },
  { name: "Food & Drinks", images: `${images.C5}` },
  { name: "Fun Gifts", images: `${images.C6}` },
  { name: "Gift for me", images: `${images.C7}` },
  { name: "Gift for Prison", images: `${images.C8}` },
  { name: "Home & Garden", images: `${images.C2}` },
  { name: "kids", images: `${images.C1}` },
  { name: "Luxurious", images: `${images.C3}` },
  { name: "Profession", images: `${images.C4}` },
  { name: "Pyschological", images: `${images.C5}` },
  { name: "Season", images: `${images.C6}` },
  { name: "Spiritual", images: `${images.C7}` },
  { name: "Vintage 90's", images: `${images.C8}` },];

const PopularCategory = () => {
  const navigate = useNavigate();

  const handleClick= (item : string) => {
    navigate(`/category/${item}`);
    window.scrollTo(0, 0);
  };

  return (
    <Flex className="flex-col w-[90%] m-auto space-y-12">
      <Flex className=" py-6 sm:space-y-0 space-y-4 justify-between sm:flex-row flex-col md:items-center items-start ">
        <Flex className=" justify-between  items-center flex-col md:flex-row">
          <p className="font-bold sm:text-[32px] text-[20px]">All Categories</p>
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
      <Flex className="grid sm:grid-cols-4 grid-cols-2 gap-y-8  place-items-center">
        {category.map((items) =>
          <Flex className="flex-col items-center space-y-4" >
            <Flex onClick={() => handleClick(items.name)} className=" cursor-pointer  rounded-md bg-cover bg-center lg:w-[220px] md:w-[160px] sm:w-[130px] w-[150px] lg:h-[220px] md:h-[160px] sm:h-[130px] h-[150px]  overflow-hidden" >
              <div className=" w-[100%] h-[100%] relative  group">
                <img src={items.images} alt="Your Image" className="object-cover w-full h-full " />
              </div>
            </Flex>
            <p className="text-black font-[500] lg:text-[25px] md:text-[18.9px] text-[15px] p-2">
              {items.name}
            </p>
          </Flex>
        )}
      </Flex>
      <Flex className="justify-start sm:pb-10 items-center">
        <img src={images.banner3} alt="banner" className=" w-[95%] m-auto" />
        <p className="absolute lg:text-[56px] md:text-[40px] sm:text-[36px] text-[20px] font-bold font-poppins md:leading-[74px] md:pl-28 sm:pl-16 pl-6">Get an Exceptional Deals<br/> From these Categories</p>
      </Flex>
    </Flex>
  )
}
export default PopularCategory
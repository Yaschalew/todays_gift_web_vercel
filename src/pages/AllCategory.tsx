import { Flex } from "antd";
import CategoryDisplay from "../components/allcategory/CategoryDisplay";
import CategoryDisplay2 from "../components/allcategory/CategoryDisplay2";
import PopularCategory from "../components/allcategory/AllCategory";
import Occasional from "../components/allcategory/Occasional";
import Navigation from "../ui/Navigation";
import AppDesc from "../components/home/AppDesc";

const AllCategory = () => {
  return (
    <Flex className="flex-col lg:pt-28 pt-24">
      <CategoryDisplay />
      <CategoryDisplay2 />
      <PopularCategory />
      <Occasional />
      <AppDesc/>
      <Navigation />
    </Flex>
  );
};
export default AllCategory;

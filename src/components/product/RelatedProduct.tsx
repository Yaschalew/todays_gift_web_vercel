import { Button } from "antd";
import { Flex } from "antd";
import { useState } from "react";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Cards from "../../ui/Cards";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../services/useProduct";
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

function PopularGifts() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(4);
  console.log(setCurrentIndex)
  const { isLoading, product } = useProducts();

  if (isLoading) {
    return <h1>Loading ...</h1>
  }

  // const handleNext = (index: number) => {
  //   setCurrentIndex(index);
  // };

  // const handlePrevious = (index: number) => {
  //   setCurrentIndex(index);
  // };
  const handleClick = (items: string) => {
    navigate(`/search/${items}`)
    window.scrollTo(0, 0);
  }

   
  const displayProduct = product?.products.slice(currentIndex, currentIndex + 9);
  if(isLoading){
    <p>waiting</p>
  }
  return (
    <Flex className="flex-col items pt-4 w-[90%] m-auto space-y-4">
      <Flex className="pt-4 justify-between">
        <Flex>
          <p className="font-bold text-3xl">Related Gifts</p>
        </Flex>
      </Flex>
      <Flex className="flex-col items-center pb-12 space-y-16">
      <Flex className=" relative ">
        <Flex className="truncate grid grid-rows-3 grid-flow-col gap-4 justify-between">
          {displayProduct?.map((products: ProductProps, index: number) => (
              <Cards Products={products} key={index} />
          ))}
        </Flex>
      </Flex>
          <Button className="text-[#60B7C3] font-semibold px-6" size="large" onClick={() => handleClick("View All")} >
            View More
          </Button>
        </Flex>
    </Flex>
  );
}

export default PopularGifts;

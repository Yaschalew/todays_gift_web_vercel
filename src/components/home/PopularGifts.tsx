import { Button, Spin} from "antd";
import { Flex } from "antd";
import { useState } from "react";
import Cards from "../../ui/Cards";
import { useProducts } from "../../services/useProduct";
import { useNavigate } from "react-router-dom";

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
   
  const displayProduct = product?.products.slice(currentIndex, currentIndex + 6);
  const handleClickCategory = () => {
    navigate(`/category`)
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <Flex className="pt-36 flex-col items-center space-y-20 justify-center">
      <h1 className="font-semibold">Loading ...</h1>
      <Spin/>
    </Flex>
    )};
    
  return (
    <Flex className="flex-col space-y-5 sm:pt-8 pt-[6rem] w-[90%] m-auto">
      <Flex className="pt-4 px-2 justify-between w-[96%] ">
        <Flex>
          <p className="font-bold sm:text-3xl text-[1.3rem]">Today's Featured Gifts</p>
        </Flex>
        <Flex>
          <Button onClick={() => handleClickCategory()} className="sm:inline hidden text-[#60B7C3] px-6" size="large"  >
            View All
          </Button>
        </Flex>
      </Flex>
      <Flex className=" relative ">
        <Flex className="truncate grid sm:grid-rows-2 grid-rows-3 grid-flow-col gap-4 m-auto ">
          {displayProduct?.map((products: ProductProps, index: number) => (
              <Cards Products={products} key={index} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PopularGifts;

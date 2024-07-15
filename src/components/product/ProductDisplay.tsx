/* eslint-disable eqeqeq */
import { Flex, Typography, Spin } from "antd";
import { IoStar } from "react-icons/io5";
import { Image } from "antd";
import { IoShareSocial } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useProducts } from "../../services/useProduct";
import { useNavigate } from "react-router-dom";

interface ProductProps {
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

type Productsprop = {
  filterProduct: ProductProps[];
};
type Params = {
  id: string;
};

const ProductDisplay = ({ filterProduct }: Productsprop) => {
  const { id } = useParams<Params>();
  const { Text } = Typography;
  const navigate = useNavigate();
  const { isLoading} = useProducts();
  //const [checkHeart, setCheckHeart] = useState(false);
  //  check the below code
  const imageProduct = filterProduct[0]?.images?.map((image) => image);
  //const productsList = product?.products?.filter(
    (item: ProductProps) => item.id == id
 // );

  //const [buttons, setButtons] = useState([
   // { ids: 1, label: "Button 1", checked: false, color: "bg-[#F15025]" },
   // { ids: 2, label: "Button 2", checked: false, color: "bg-[#456ED6]" },
   // { ids: 3, label: "Button 3", checked: false, color: "bg-[#56C8EB]" },
  //]);

  // const handleChecked = (i: number) => {
  //   const updatedButtons = buttons.map((button: any) => {
  //     if (button.ids === i) {
  //       return { ...button, checked: !button.checked };
  //     }
  //     if (button.ids !== i) {
  //       return { ...button, checked: false };
  //     }
  //     return button;
  //   });
  //   setButtons(updatedButtons);
  // };

  // const handleCheckedHeart = () => {
  //   setCheckHeart(!checkHeart);
  // };

  const handleProduct = (proId: string) => {
    navigate(`/checkout/${proId}`);
    window.scrollTo(0, 0);
  };


  
  if (isLoading) {
    return (
    <Flex className="flex-col items-center justify-center">
      <h1>Loading ...</h1>
      <Spin/>
    </Flex>
    )}

  return (
    <Flex className=" flex-col m-auto">
      <Flex className="md:flex hidden lg:pt-[4rem] pt-[3rem] bg-[#FAF9F6] items-center p-2">
        <p className=" text-[#828282] cursor-pointer w-[90%] m-auto lg:py-2">
          <span className="hover:text-[#38A6B4] ">Home </span>{" "}
          <span className="text-[.8rem]"> / </span>
          <span className="hover:text-[#38A6B4]">Categories </span>{" "}
          <span className="text-[.8rem]"> / </span>
          <span className="hover:text-[#38A6B4]">For her </span>{" "}
          <span className="text-[.8rem]"> / </span>
          <span className="hover:text-[#38A6B4]">For Sister </span>{" "}
          <span className="text-[.8rem]"> / </span>
          <span className="text-[#38A6B4]"> Gift Combo 1</span>
        </p>
      </Flex>
      <Flex className="lg:w-[75%] w-[90%]  m-auto lg:ml-[8rem] md:ml-[2rem]  pt-[2rem] justify-around md:space-x-3 space-x-0 space-y-6 md:space-y-0  md:flex-row flex-col ">
        <Flex className=" justify-center">
          {/* not satisfied check the code later */}
          <Image.PreviewGroup
            items={[
              `${filterProduct[0]?.thumbnail}`,
              `${imageProduct?.[0]}`,
              `${imageProduct?.[1]}`,
              `${imageProduct?.[2]}`,
              `${imageProduct?.[3]}`,
            ]}
          >
            <div className=" w-auto h-auto rounded-md border border-black">
              <Image src={filterProduct[0]?.thumbnail} width={340} />
            </div>
          </Image.PreviewGroup>
        </Flex>
        <Flex className="flex-col text-[#707070] space-y-10 ">
          <Flex className="flex-col space-y-7 w-[95%] sm:w-[80%] md:w-[100%] m-auto">
            <Flex className="md:flex-col space-x-1 justify-between items-start">
              <Flex className="flex-col">
                <p className="font-bold md:text-3xl sm:text-2xl text-[1.2rem] text-black">
                  {filterProduct[0]?.title}
                </p>
                <p>{filterProduct[0]?.category}</p>
              </Flex>
              <Flex className="md:flex-col-reverse flex-col space-y-2">
                <p className="font-bold md:text-3xl sm:text-2xl text-[1.2rem] text-black lg:py-8">
                  {filterProduct[0]?.price} ETB
                </p>
                <Flex className="space-x-2">
                  <IoStar className="text-[#FFC540] text-xl" />
                  <Text>{filterProduct[0]?.rating}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="flex-col space-y-7">
            <Flex className="lg:space-x-5 space-x-2 py-3 flex-wrap w-[90%] sm:w-[80%] md:w-[100%] m-auto">
              {filterProduct[0]?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="images 1"
                  className="sm:w-[6rem] w-auto sm:h-[6rem] h-[5rem]  border border-gray-500 rounded-md"
                />
              ))}
            </Flex>
            <Flex className="lg:space-x-4 space-x-10 md:space-x-2 w-[90%] sm:w-[80%] md:w-[100%] m-auto">
              <button
                onClick={() => handleProduct(filterProduct[0]?.id)}
                className="bg-[#2798a7] border-[#2798a7] border-2 hover:bg-white hover:text-[#2798a7] text-white sm:px-6 px-4 sm:py-3 py-2 rounded-md "
              >
                <Flex className="item-center space-x-7 ">
                  <p>BuyNow </p>
                  <img
                    src="/icons/buy.svg"
                    className="text-[#2BA0AF]  rounded h-[1.5rem]"
                    style={{ borderRadius: 4, padding: 3 }}
                  />
                </Flex>
              </button>
              <button className=" sm:w-[3.2rem] w-[2.5rem]  sm:px-3 px-2 rounded-md bg-[#dff0f3] text-[#2798a7] ">
                <IoShareSocial className="text-2xl ease-in delay-200 transition duration-200   hover:scale-125" />
              </button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ProductDisplay;

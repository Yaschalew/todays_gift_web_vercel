import { Carousel, Flex } from "antd";
import images from "../../constants";
import { useNavigate } from "react-router-dom";
// import { useCategory } from "../../services/useCategory";
import { useAllProduct } from "../../services/useProduct";
// type Category = {
//   uid: number;
//   name: string;
//   parent: string;
//   children: [];
//   type: string;
// };

const image = [
               {name: `${images.slider2}`, title: "Present in The Moment", button: "EXPLORE NOW"},
               {name: `${images.slider1}`, title: "Today is a Gift, that's is why its called Present" ,button: "UNWRAP ALL" },
               {name: `${images.slider3}`, title: "Shop the Perfect Present Online",  button: "SHOP ONLINE", color: "#2BA0AF"}];

const Navlist = () => {
  //const {isCategory, error, categories } = useCategory();
  const {products} = useAllProduct();
  console.log(products)
  //const MainCategories = categories?.map((item :Category) => console.log(item.name))
  
  const navigate = useNavigate();

  const handleClickCategory = () => {
    navigate(`/category`)
    window.scrollTo(0, 0);
  };

  return (
    <Flex className="flex-col w-auto">
      <Carousel autoplay autoplaySpeed={3000} dots={false}>
        {image?.map((items) => 
      <div>
          <img src={items?.name} className="w-full lg:h-[600px]  md:h-[400px]  sm:h-[300px] h-[250px] relative z-0" alt="img1" />
          <Flex className="flex-col justify-start absolute lg:top-32 md:top-20 top-8 sm:px-16 px-6 z-10 space-y-3 items-start text-white flex-wrap">
            <h1 style={{ fontFamily: 'Baou' }} className={`${items?.color ? `text-[${items.color}]` : ''} xl:text-[400%] xl:w-[60%] lg:text-[360%] lg:w-[60%] md:text-[250%] md:w-[60%] sm:text-[200%] sm:w-[50%] text-[140%] w-[48%] md:leading-[70px] z-20 font-Baou`}>
             {items?.title}
            </h1>
            <p className="md:pb-12 pb-2  xl:text-[160%] text-[110%] text-auto">
              Unwrap Today's Joy,
              <br />
              Shop the Perfect Present Online!
            </p>
            <button onClick={() => handleClickCategory()} className="bg-white text-[#45ACB9] md:text-[1rem] text-[0.8rem] font-medium sm:px-4 px-1 hover:text-[#00e1ff] sm:py-2 py-1 rounded ">
              {items?.button}
            </button>
          </Flex>
        </div>
         )} 
      </Carousel>
    </Flex>
  );
};
export default Navlist;

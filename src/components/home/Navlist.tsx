import { Carousel, Flex } from "antd";
import images from "../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";



const Navlist = () => {
  const navigate = useNavigate();

  const handleClick = (items: string) => {
    navigate(`/search/${items}`)
    window.scrollTo(0, 0);
  }
  return (
    <Flex className="flex-col">
       <Carousel autoplay autoplaySpeed={3000} dots={false}>
            <div>
                <img src={images.slider2} className="w-full h-[600px] relative z-0" alt="img1" />
                <Flex className="flex-col justify-start absolute top-40 px-16 z-10 space-y-3 items-start text-white flex-wrap">
                  <h1  style={{ fontFamily: 'Baou' }} className="text-[60px]  leading-[70px] z-20  font-Baou">
                    Present in <br />
                    The Moment
                  </h1>
                  <p className="pb-12 text-[20px]">
                    Unwrap Today's Joy,
                    <br />
                    Shop the Perfect Present Online!
                  </p>
                  <button onClick={() => handleClick("View All")} className="bg-white text-[#45ACB9] font-medium px-4 hover:text-[#00e1ff] py-2 rounded ">
                    EXPLORE NOW
                  </button>
                </Flex>
            </div>
            <div>
               <img src={images.slider1} className="w-full h-[600px]  relative z-0" alt="img2" />
                <Flex className="flex-col justify-start absolute top-40 px-16 space-y-3 z-10  items-start text-white flex-wrap">
                  <h1 style={{ fontFamily: 'Baou' }} className="text-[60px]  leading-[70px] z-20  font-Baou">
                    Today is a Gift,<br/> that's is why its<br/> called Present
                  </h1>
                  <p className="pb-8 text-[20px]">
                    Unwrap Today's Joy,
                    <br />
                    Shop the Perfect Present Online!
                  </p>
                  <button onClick={() => handleClick("View All")} className="bg-white text-[#45ACB9] font-medium px-4 hover:text-[#00e1ff] py-2 rounded ">
                    UNWRAP ALL
                  </button>
                </Flex>
            </div>
            <div>
            <img src={images.slider3} className="w-full h-[600px] relative z-0" alt="img3" />
                <Flex className="flex-col justify-start absolute top-40 px-16 z-10 space-y-3  items-start text-white flex-wrap">
                  <h1 style={{ fontFamily: 'Baou' }} className="text-[60px]  leading-[70px] z-20  font-Baou">
                    Shop the <br/>Perfect Present<br/>Online
                  </h1>
                  <p className="pb-12 text-[20px]">
                    Unwrap Today's Joy,
                    <br />
                    Shop the Perfect Present Online!
                  </p>
                  <button onClick={() => handleClick("View All")} className="bg-white text-[#45ACB9] font-medium px-4 hover:text-[#00e1ff] py-2 rounded ">
                    SHOP ONLINE
                  </button>
                </Flex>
            </div>
        </Carousel>
    </Flex>
  );
};
export default Navlist;

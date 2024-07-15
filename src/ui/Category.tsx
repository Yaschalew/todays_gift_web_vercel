import { Flex } from "antd"
import { useNavigate } from "react-router-dom";

interface category {
    name: string;
    images: string;
}

const Category = ({ name, images }: category) => {
    const navigate = useNavigate();
    const handleClick = (items: string) => {
        navigate(`/search/${items}`);
        window.scrollTo(0, 0);
    };
    console.log(name)
    return (
        <Flex className="flex-col sm:space-y-2">
            <button onClick={() => handleClick(name)} >
                <div className=" rounded-md bg-cover bg-center w-auto h-auto overflow-hidden" >
                    <div className=" w-[100%] h-[100%] relative  group">
                        <img src={images} alt="Your Image" className="object-cover  sm:w-[320px] w-[180px] sm:h-[220px] h-[180px] transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110" />
                    </div>
                </div>
            </button>
            <p className="text-black font-[500] text-center 2xl:text-[25px] md:text-[22px] text-[17px] p-2">
                {name}
            </p>
        </Flex>
    )
}
export default Category
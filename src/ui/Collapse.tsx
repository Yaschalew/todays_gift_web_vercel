import { Flex } from "antd";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
interface lists {
    item: {
        name: string;
        category: string[];
    }
};
const Collapse = ({ item }: lists) => {
    const navigate = useNavigate();
    const [list, setList] = useState(false);

    const handleList = () => {
        setList(!list);
    }
    const handleClick = (id: string) => {
        navigate(`/category/${id}`);
        window.scrollTo(0, 0);
      };

    return (
        <Flex className="flex-col">
            <Flex className="items-center justify-between  px-5 py-1">
                <p className="font-semibold w-[100%]">{item.name}</p>
                <button onClick={handleList} className="text-[#41AAB7] text-[1.5rem]">
                    {list ?
                        <IoIosArrowUp /> :
                        <IoIosArrowDown />
                    }
                </button>
                <hr />
            </Flex>
            <Flex className="bg-[#D2EBEE] flex-col">
                {list &&
                    <Flex className="px-5 flex-col space-y-4 py-4">
                        {item?.category?.map((item, index) =>
                            <p onClick={() => handleClick(item)} key={index} className="cursor-pointer">{item}</p>
                        )}
                    </Flex>
                }
            </Flex>
        </Flex>
    )
}
export default Collapse;
import { Flex } from "antd"
import Collapse from "../../ui/Collapse";
import { useNavigate } from "react-router-dom";

const categories = [
    { name: "Shop by Recipient", category: ["Man", "Woman", "Kids", "Teens", "Me", "Mom", "Dad", "Both Gender"] },
    { name: "Shop by Categories", category: ["Cultural", "Coporate gift", "Educational", "Food and Drinks", "Gifts for prison", "Home and Graden", "Professional", "Psychological", "Spiritual"] },
    { name: "Shop by Occasions", category: ["Anniversary", "Apologygifts", "Appreciation", "Baby shower", "Back to School", "Christening", "Engagement", "Get well", "Graduation", "Welcome and farewell"] }
];
const categoriesMobile = [
    { name: "Shop by Recipient", category: ["Man", "Woman", "Kids", "Teens", "Me", "Mom", "Dad", "Both Gender"] },
    { name: "Shop by Categories", category: ["Cultural", "Coporate gift", "Educational", "Food and Drinks", "Gifts for prison", "Home and Graden", "Professional", "Psychological", "Spiritual"] },
    { name: "Shop by Occasions", category: ["Anniversary", "Apologygifts", "Appreciation", "Baby shower", "Back to School", "Christening", "Engagement", "Get well", "Graduation", "Welcome and farewell"] },
    { name: "About Today's Gift", category: ["About us", "News and Blog","Invertors", "Affilaties and Partners", "Suppliers" ]},
    { name: "Support", category: ["FAQs", "Visit support center", "Retrive odrer info","Feedback"]},
];


const AppDesc = () => {
    const navigate = useNavigate();
    const handleClick = (id: string) => {
        navigate(`/category/${id}`);
        window.scrollTo(0, 0);
      };
    return (
        <Flex className="flex-col ">
            <Flex className="md:flex hidden justify-around pt-20 bg-[#F8F8F8] p-2 py-16">
                {categories?.map((item, index) =>
                    <Flex key={index} className="flex-col space-y-4">
                        <p className="font-bold lg:text-[1.6rem] text-[1.3rem]">{item.name}</p>
                        <Flex className="flex-col  space-y-4 items-start px-5">
                            {item.category.map((cat, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(cat)}
                                    className="hover:underline hover:underline-offset-4"
                                >
                                    <p>{cat}</p>
                                </button>
                            ))}
                        </Flex>
                    </Flex>
                )}
            </Flex>
            <Flex className="pt-4 space-y-4 flex-col md:hidden flex">
                {categoriesMobile?.map((item, index) =>
                <Collapse item={item} key={index}/>
                )}
            </Flex>
        </Flex>
    )
}
export default AppDesc
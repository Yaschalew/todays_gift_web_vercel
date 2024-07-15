import { Flex } from "antd";
import { IoStar } from "react-icons/io5";

const Review = () => {
    return (
        <Flex className="py-16 bg-[#F5F5F5] w-[60%] m-auto flex-col items-center space-y-4">
            <p className=" text-black sm:text-3xl text-2xl">Review Submitted</p>
            <Flex className="space-x-1">
                <IoStar className="text-[#FFC540] sm:text-2xl text-xl" />
                <IoStar className="text-[#FFC540] sm:text-2xl text-xl" />
                <IoStar className="text-[#FFC540] sm:text-2xl text-xl" />
                <IoStar className="text-[#FFC540] sm:text-2xl text-xl" />
                <IoStar className="text-[#FFC540] sm:text-2xl text-xl" />
            </Flex>
            <p className="font-bold sm:text-2xl text-1xl text-[#2BA0AF]">Thanks For your Review!</p>

        </Flex>
    )
}
export default Review;
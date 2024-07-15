import { Flex } from "antd";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import images from "../../constants";

const Apppop = () => {
    return (
            <Flex className="flex-col sm:flex-row items-center px-8 bg-[#F5F5F5] text-black w-[86%] h-[25rem] m-auto">
                <Flex className="sm:py-6 flex-col sm:space-y-4 ">
                    <p className="text-3xl font-semibold">Get <span className="text-[#2BA0AF] font-bold">Today's</span> App</p>
                    <p className="text-[1rem]">Download out app now to unlock exclusive offers, seamless browsing, and personalized recommendations. </p>
                    <p className="font-semibold text-[1.1rem]">Available on Both Android and iOS</p>
                    <Flex className="flex-col lg:flex-row items-start lg:space-x-4   lg:space-y-0 space-y-3 pt-3">
                        <button className="bg-[#1C1B1E] text-white px-2 rounded-lg">
                            <Flex className="items-center p-1 space-x-3">
                                <BiLogoPlayStore className="text-3xl" />
                                <Flex className="flex-col items-start">
                                    <p className="text-[.6rem]">Get it on</p>
                                    <p>Google Play</p>
                                </Flex>
                            </Flex>
                        </button>
                        <button className="bg-[#1C1B1E] text-white px-2 rounded-lg">
                            <Flex className="items-center p-1 space-x-3">
                                <FaApple className="text-3xl" />
                                <Flex className="flex-col">
                                    <p className="text-[.6rem]">Download on the</p>
                                    <p>App Store</p>
                                </Flex>
                            </Flex>
                        </button>
                    </Flex>
                </Flex>
                <Flex>
                    <img src={images.app} className="sm:w-[65%] w-[26%] h-auto m-auto" alt="appImg" />
                </Flex>
        </Flex>
    )
}
export default Apppop;
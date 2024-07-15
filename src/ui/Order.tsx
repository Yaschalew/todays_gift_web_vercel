import { Flex } from "antd";

const Order = () => {
    return (
        <Flex className="flex-col space-y-24 items-center">
            <p className="text-[#2BA0AF] font-bold sm:text-2xl text-1xl">Thank You For The Purchase!</p>
            <Flex className="flex-col space-y-4 items-center p-12 sm:p-0">
                <p className="text-black">Order #123RGR231567Y Confirmed</p>
                <p className="text-[#44AAB7] font-semibold ">Track your order Via your email that you provide in the checkout</p>
            </Flex>
        </Flex>
    )
}
export default Order;
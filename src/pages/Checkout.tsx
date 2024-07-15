import { Flex } from "antd"
import CheckoutList from "../components/checkout/CheckoutList"
import AppDesc from "../components/home/AppDesc"
import Navigation from "../ui/Navigation"


const Checkout = () => {
    return (
    <Flex className="flex-col pt-24">
        <CheckoutList/>
        <AppDesc/>
        <Navigation/>
    </Flex>
    )
}
export default Checkout
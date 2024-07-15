import Categories from "../components/home/Categories"
import FlashSale from "../components/home/FlashSale"
//import PopularCategories from "../components/home/PopularCategories"
import PopularGifts from "../components/home/PopularGifts"
import CategoryList from "../components/home/CategoryList"
import Slide from "../components/home/Slide"
import Navlist from "../components/home/Navlist"
import AppDesc from "../components/home/AppDesc"
import PopularCategory from "../components/home/PopularCategory"
import { Flex } from "antd"
import Trendy from "../components/home/Trendy"
import Navigation from "../ui/Navigation"
//import Carsouel from "../components/home/Carsouel"


function Home() {
    return (
        <div >
            <CategoryList/>
            <Flex className="space-y-10 sm:flex-col flex-col-reverse">
            <Slide/>
            <PopularCategory/>
            </Flex>
            <PopularGifts/>
            {/* <Carsouel/> */}
            <FlashSale/>
            <Categories/>
            <Trendy/>
            <Navlist/>
            <AppDesc/>
            <Navigation/>
        </div>
    )
}

export default Home

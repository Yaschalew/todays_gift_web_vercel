import Categories from "../components/home/Categories"
import FlashSale from "../components/home/FlashSale"
import PopularCategories from "../components/home/PopularCategories"
import PopularGifts from "../components/home/PopularGifts"
import CategoryList from "../components/home/CategoryList"
import Slide from "../components/home/Slide"
import Navlist from "../components/home/Navlist"
import AppDesc from "../components/home/AppDesc"
//import Carsouel from "../components/home/Carsouel"


function Home() {
    return (
        <div >
            <CategoryList/>
            <Navlist/>
            <PopularGifts/>
            <Slide/>
            <Categories/>
            {/* <Carsouel/> */}
            <FlashSale/>
            <AppDesc/>
        </div>
    )
}

export default Home

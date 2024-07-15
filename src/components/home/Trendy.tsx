import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useProducts } from '../../services/useProduct';
import { useNavigate } from 'react-router-dom';
import { Flex } from 'antd';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { useCart } from './useCart';

type ProductProps = {
    id: string;
    brand: string;
    category: string;
    description: string;
    images: [];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

const Trendy = () => {
    const { isLoading, product } = useProducts();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const handleClick = (id: string) => {
        navigate(`/product/${id}`);
        window.scrollTo(0, 0);
    };

    if (isLoading) {
        return <h1>Loading ...</h1>
    }
    return (
        <Flex className='flex-col md:hidden pb-8'>
            <p className='font-[700] md:text-[44px] text-[28px] px-6'>Trendy Gifts</p>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1.8, // When screen is >= 0px
                    },
                    440: {
                        slidesPerView: 2.2, // When screen is >= 0px
                    },
                    640: {
                        slidesPerView: 2.5, // When screen is >= 640px
                    },
                    768: {
                        slidesPerView: 2, // When screen is >= 0px
                    },
                    860: {
                        slidesPerView: 2.5, // When screen is >= 0px
                    },
                    1024: {
                        slidesPerView: 3.2, // When screen is >= 1024px
                    },
                }}
                //spaceBetween={20}
                className="mySwiper  sm:w-[100%] md:w-[85%]  w-[100%] me-1"
            >
                {product?.products?.map((products: ProductProps, index: number) => (
                    <SwiperSlide key={index}>
                        <Flex className="space-y-2  flex-col w-auto h-auto sm:m-4 m-2  ">
                            <button onClick={() => handleClick(products.id)}>
                                <img
                                    alt="example"
                                    src={products.thumbnail}
                                    className="md:w-[490px] w-[100%] h-[100%] rounded "
                                />
                            </button>
                            <button onClick={(event) => addToCart(products, event)} className=" ">
                                <div style={{ backgroundColor: 'white', borderRadius: 6, padding: 4 }} className="my-icons ">
                                    <img src='/icons/buy.svg' className="sm:inline hidden text-[#2BA0AF] p-1  sm:h-[1.8rem] h-[1.4rem] " />
                                    <img src='/icons/heart.svg' className="sm:hidden inline text-[#2BA0AF] p-1  sm:h-[1.8rem] h-[1.4rem] " />
                                </div>
                            </button>
                            <Flex className="flex-col">
                                <Flex className=" items-end justify-between flex-wrap">
                                    <p className="font-semibold text-center capitalize sm:text-[16px] text-[13px] leading-4  truncate">
                                        Gift Combo
                                    </p>
                                    <Flex className="font-semibold text-center capitalize sm:text-[18px] text-[13px] leading-4  truncate">
                                        <p>{products.price} ETB</p>
                                    </Flex>
                                </Flex>
                                <Flex className="items-end justify-between flex-wrap">
                                    <div>
                                        <p className=' sm:text-[1rem] text-[.7rem]'>Gift for him</p>
                                    </div>
                                    <Flex className="items-center">
                                        <MdOutlineStarPurple500 className="text-[#FFC540] " />
                                        <p className=" font-semibold sm:text-[.8rem] text-[.8rem]">{products.rating}</p>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                ))}

            </Swiper>
        </Flex>
    )
}

export default Trendy
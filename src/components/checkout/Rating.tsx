import { Button, Flex, Modal } from "antd";
import { useState } from "react";
import Review from "./Review";
import { IoStar} from "react-icons/io5";
import Apppop from "./Apppop";

const Rating = () => {
   
    const [modalReview, setModalReview] = useState(false);
    const [modalApp, setModalApp] = useState(false);

    const handleOkRating = () => {
        setModalReview(false);
    };

    const handleCancelRating = () => {
        setModalReview(false);
    };
    const handleOkApp = () => {
        setModalApp(false);
    };

    const handleCancelApp = () => {
        setModalApp(false);
    };

    const handleShow = () => {
        setModalReview(true);
        setTimeout(() => {
            setModalReview(false);
            setModalApp(true);
        }, 2000);
    }
    return (
        <Flex className="py-8 bg-[#F5F5F5] w-[60%] m-auto flex-col items-center space-y-4">
            <p className=" text-black font-bold text-2xl">Rate This Gift?</p>
            <Flex className="space-x-1">
                <IoStar className="text-[#C4C4C4] sm:text-2xl text-xl" />
                <IoStar className="text-[#C4C4C4] sm:text-2xl text-xl" />
                <IoStar className="text-[#C4C4C4] sm:text-2xl text-xl" />
                <IoStar className="text-[#C4C4C4] sm:text-2xl text-xl" />
                <IoStar className="text-[#C4C4C4] sm:text-2xl text-xl" />
            </Flex>
            <p className="text-black font-semibold text-center">How was your shopping experience?</p>
            <Flex>
                <img src='/icons/rating.svg' alt="rating" className="w-[15rem] h-auto" />
            </Flex>
            <textarea placeholder="Write your review here ..." className=" w-[90%] text-black p-2 rounded h-[9rem] bg-[#D9D9D9]" />
            <Button type="primary" className="font-semibold bg-[#2BA0AF] px-10" onClick={handleShow} size="large">Submit</Button>
            <Modal
                open={modalReview}
                onOk={handleOkRating}
                onCancel={handleCancelRating}
                width={700}
                footer={null}
                className="w-[10rem]"
                style={{ color: '#D2EBEE' }}
            >
                <Flex className="items-center m-[-1.6rem] justify-center h-[33rem] bg-[#D2EBEE]">
                    <Review />
                </Flex>
            </Modal>
            <Modal
                open={modalApp}
                onOk={handleOkApp}
                onCancel={handleCancelApp}
                width={700}
                footer={null}
                className="h-[10rem]"
                style={{ color: '#D2EBEE' }}
            >
                <Flex className="items-center m-[-1.6rem] justify-center h-[33rem] bg-[#D2EBEE]">
                    <Apppop/>
                </Flex>
            </Modal>
        </Flex>
    )
}
export default Rating;
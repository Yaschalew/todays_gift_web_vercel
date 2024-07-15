import { Flex, Modal, Spin } from "antd";
import { useState } from "react";
import images from "../../constants/images";
import Order from "../../ui/Order";
import Rating from "./Rating";
import Summary from "./Summary";
import Payment from "./Payment";

interface PayMethods {
  name: string;
  image: string;
  no: string;
}


const payment = [
  { name: 'Tele birr', no: 'Scan or use our Merchant Id: 343434', image: `${images.tele}` },
  { name: 'Bank of Abyssinia', no: 'Pay via BOA: 34343434', image: `${images.abyssinia}` },
  { name: 'Commercial Bank of Ethiopia', no: 'Pay via CBE:1000034343434', image: `${images.cbe}` }
];

const CheckoutList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [modalNext, setModalNext] = useState(false);
  const [modalRating, setModalRating] = useState(false);



  const handleOk = () => {
    setIsModalVisible(false);
  };



  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOkRating = () => {
    setModalRating(false);
  };

  const handleCancelRating = () => {
    setModalRating(false);
  };

  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(true);
    // windowToScroll(0, 0);
  };

  const handleShow = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setModalNext(true);
      setTimeout(() => {
        setModalNext(false);
        setModalRating(true);
      }, 4000);
    }, 2000);
  };

  console.log(isModalVisible);
  console.log(modalNext);

  return (
    <Flex className="flex-col lg:w-[80%] sm:w-[95%] w-[95%] m-auto ">
      <Flex className="space-x-8  items-center">
        <Flex className="md:py-16 py-0 space-y-8 flex-col">
          <h1 className="font-bold text-3xl pt-3">Checkout</h1>
          <Flex className="flex-col items-start  space-y-5">
            <p className="font-semibold text-[.9rem]">1 of 2 step</p>
            <Flex className="space-x-4 ">
              <Flex className=" flex-col space-y-3">
                <p className="md:w-[20rem] sm:w-[17rem] w-[10rem] h-2 bg-[#2BA0AF]"></p>
                <Flex className="space-x-2 items-center">
                  <p className="border border-[#2BA0AF] px-[.7rem] py-[.1rem] bg-[#2BA0AF] text-white rounded-full  font-semibold">
                    1
                  </p>
                  <p className="text-[0.9rem] sm:text-[1rem]">Set the order</p>
                </Flex>
              </Flex>
              <Flex className=" flex-col space-y-3">
                <p
                  className={`${change ? "bg-[#2BA0AF]" : "bg-[#D5ECEF]"
                    } md:w-[20rem] sm:w-[17rem] w-[10rem] h-2 `}
                ></p>
                <Flex className="space-x-2 items-center">
                  <p
                    className={`${change
                      ? `bg-[#2BA0AF] text-white`
                      : ` text-[#2BA0AF] font-semibold`
                      } border border-[#2BA0AF]  px-2 rounded-full`}
                  >
                    2
                  </p>
                  <p className="text-[0.9rem] sm:text-[1rem]">
                    Set the payment
                  </p>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {change ? (
        <Flex className="space-x-6 pb-8 md:pt-0 pt-8  ">
          <Flex className="flex-col space-y-10 basis-3/5 ">
            <p className="font-semibold">Payment Method</p>
            <Flex className="flex-col space-y-5 ">
              {payment.map((item: PayMethods, index) =>
                <Payment no={item.no} image={item.image} name={item.name} key={index}/>
              )}
            </Flex>
            <Flex className="flex-col text-[.9rem] w-[160%]">
              <p className="font-semibold">Payment Instruction</p>
              <p>
                For security, we do not store your complete caed details on our
                servers, all payments are Processed & secured through
                Cybersource(A visa solution). You can pay also using your bank
                of Abyssinia ATM card
              </p>
            </Flex>
            <Flex>
              <button
                onClick={handleShow}
                className="md:w-[40%] text-white rounded-lg p-4 text-[1rem] bg-[#2BA0AF] font-semibold"
              >
                {" "}
                Finish Payment
              </button>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Summary handleChange={handleChange} />
      )}
      <Modal
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        footer={null}
        closable={false}
        className="h-[10rem]"
        style={{ color: "#f5f5f5" }}
      >
        <Flex className="flex-col space-y-32 items-center m-[-1.6rem] justify-center h-[25rem] bg-[#F5F5F5]">
          <Spin size="large" />
          <img src={images.todays} className="w-[45px] " alt="logo" />
        </Flex>
      </Modal>
      <Modal
        open={modalNext}
        width={700}
        footer={null}
        closable={false}
        className="h-[10rem]"
        style={{ color: "#f5f5f5" }}
      >
        <Flex className="items-center m-[-1.6rem] justify-center h-[28rem] bg-[#F5F5F5]">
          <Order />
        </Flex>
      </Modal>
      <Modal
        open={modalRating}
        onOk={handleOkRating}
        onCancel={handleCancelRating}
        width={700}

        footer={null}
        className="h-[18rem]"
        style={{ color: "#D2EBEE" }}
      >
        <Flex className="items-center m-[-1.6rem] justify-center h-[33rem] bg-[#D2EBEE]">
          <Rating />
        </Flex>
      </Modal>
    </Flex>
  );
};
export default CheckoutList;

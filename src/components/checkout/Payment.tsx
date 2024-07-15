import { Flex } from "antd";
import { useState } from "react";
// import { IoTicketSharp } from "react-icons/io5";

interface PayMethod {
  name: string;
  image: string;
  no: string;
};


const Payment = ({ no, image, name }: PayMethod) => {
  const [show, setShow] = useState(false);
  const handleShowPay = () => {
    setShow(!show);
  }
  return (
    <>
      <Flex className="flex-col ">
        <Flex onClick={() => handleShowPay()} className={`${!show && `rounded-lg`} cursor-pointer lg:w-[60%] w-[130%] items-center justify-between border border-[#CFCFCF] px-8 py-4 space-y-5  `}>
          <p className="font-semibold">{name}</p>
          <img
            src="/icons/transfer.svg"
            alt="transfer1"
            className="w-[2.4rem] h-[1.4rem]"
          />
        </Flex>
        {show &&
          <Flex className="lg:w-[60%] w-[130%] items-center justify-between border border-[#CFCFCF] px-8 py-4 ">
            <Flex className="flex-col space-y-6">
              <Flex className="justify-between items-center">
                <p>Tele Birr</p>
                <img src={image} className="w-[25%] " alt="tele Birr" />
              </Flex>
              <p className="font-semibold">{no}</p>
            </Flex>
          </Flex>
        }
      </Flex>
    </>
  );
};

export default Payment;

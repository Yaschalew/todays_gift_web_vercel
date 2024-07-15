import { Flex } from "antd";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

//const Navigate = ["home", "category", "checkout", "profile"];

const Navigation = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState("");

  const handleClick = (id: string) => {
    navigate(`/${id}`);
    setItems(id);
    window.scrollTo(0, 0);
  };
  return (
    <Flex className="fixed md:hidden flex-col  bottom-0 w-[100%] left-0 z-20  ">
      <span className="h-[.4rem] bg-[#C5E5EA] w-[100%]"></span>
      <Flex className="bg-white">
        <Flex className="w-[75%] m-auto space-x-10  justify-between ">
          {items === "home" ? (
            <img
              onClick={() => handleClick("home")}
              src="/icons/walletFill.svg"
              alt="wallet"
              className="w-[3rem] rounded-lg text-[#2BA0AF] cursor-pointer underline underline-offset-[1px] p-[3px] mb-3 bg-[#C5E5EA]"
            />
          ) : (
            <img
              onClick={() => handleClick("home")}
              src="/icons/wallet.svg"
              alt="wallet"
              className="w-[3rem] rounded-lg text-[#2BA0AF] cursor-pointer underline underline-offset-[1px] p-[3px] mb-3"
            />
          )}
          {items === "category" ? (
            <img
              onClick={() => handleClick("category")}
              src="/icons/appFill.svg"
              alt="app"
              className=" cursor-pointer w-[3rem] rounded p-1  bg-[#C5E5EA]"
            />
          ) : (
            <img
              onClick={() => handleClick("category")}
              src="/icons/app.svg"
              alt="app"
              className=" cursor-pointer w-[3rem] rounded p-1"
            />
          )}
          {items === "checkout" ? (
            <img
              onClick={() => handleClick("checkout/7")}
              src="/icons/fav.svg"
              alt="heart"
              className=" cursor-pointer w-[3rem] rounded p-1  bg-[#C5E5EA]"
            />
          ) : (
            <img
              onClick={() => handleClick("checkout/7")}
              src="/icons/fav.svg"
              alt="heart"
              className=" cursor-pointer w-[3rem] rounded p-1"
            />
          )}
          {/* {items === "profile" ? (
            <img
              onClick={() => handleClick("profile")}
              src="/icons/avatarFill.svg"
              alt="avatar"
              className={` cursor-pointerw-[3rem] rounded p-1`}
            />
          ) : (
            <img
              onClick={() => handleClick("profile")}
              src="/icons/avatar.svg"
              alt="avatar"
              className={` cursor-pointerw-[3rem] rounded p-1`}
            />
          )} */}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Navigation;

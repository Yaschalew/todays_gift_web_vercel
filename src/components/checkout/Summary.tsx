import { Checkbox, DatePicker, Flex, Input, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useProducts } from "../../services/useProduct";
import { useForm } from 'react-hook-form';

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
};
interface change {
  handleChange: () => void;
}
type Params = {
  id: string;
};

const Summary: React.FC<change> = ({ handleChange }) => {
  const { id } = useParams<Params>();
  const { product, isLoading } = useProducts();
  const filterProduct = product?.products.filter(
    (item: ProductProps) => id == item.id
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   //???? any
  const onSubmit = (data:any) => {
    console.log(data);
  };

  if (isLoading) {
    return (
      <Flex className="flex-col items-center justify-center p-20">
        <h1>Loading ...</h1>
        <Spin />
      </Flex>
    );
  }

  return (
    <Flex className="flex-col md:flex-row lg:space-x-10 sm:space-x-2 space-x-0 items-start pt-6 md:pt-0 space-y-6 md:space-y-0 pb-8">
      <Flex className="flex-col w-[95%] sm:w-[80%] md:w-[100%] md:m-0 sm:ml-9 m-auto border border-[#CFCFCF] lg:px-8 px-6 py-4 rounded-lg space-y-5 md:basis-2/5">
        <p className="font-semibold">Shopping summary</p>
        <Flex className="justify-between ">
          <img
            src={filterProduct[0]?.thumbnail}
            alt=""
            className="w-[120px] h-[100px] rounded"
          />
          <Flex className="flex-col justify-between items-end">
            <Flex className="flex-col items-end">
              <p className="font-bold">Gift Combo 1</p>
              <p className="text-[.9rem]">ETB {filterProduct[0]?.price}</p>
            </Flex>
            <p className="text-[.9rem]">1 Item(s)</p>
          </Flex>
        </Flex>
        <hr />
        <Flex className="justify-between text-[.9rem]">
          <Flex className="flex-col">
            <p>Total Price (items)</p>
            <p>Delivery Price</p>
          </Flex>
          <Flex className="flex-col items-end">
            <p>ETB {filterProduct[0]?.price}</p>
            <p>ETB 100.00</p>
          </Flex>
        </Flex>
        <hr />
        <Flex className="justify-between text-[.9rem]">
          <p>GrandTotal</p>
          <p>{filterProduct[0]?.price + 100}</p>
        </Flex>
      </Flex>
      <Flex className="md:basis-3/5 flex-col space-y-8 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex className="w-[95%] sm:w-[90%] md:w-[100%] md:m-0 m-auto flex-col border md:items-start items-center px-8 py-4 rounded-lg border-[#CFCFCF] p-2 space-y-4  ">
            <p className="font-semibold">Personal Info</p>
            <Flex className="flex-col space-y-6 text-[.9rem] ">
              <Flex className="flex-col md:flex-row md:space-x-5  ">
                <Flex className="flex-col space-y-2  w-[100%]">
                  <p>First name</p>
                  <Flex>
                    <Input
                      id="firstname"
                      {...register("firstname", { required: true })}
                      size="large"
                      className="bg-[#E9E9E9] md:py-3 "
                    />
                    {errors.firstname && <p>Name is required.</p>}
                  </Flex>
                </Flex>
                <Flex className="flex-col space-y-2  w-[100%]">
                  <p>Last name</p>
                  <Flex>
                    <Input
                      id="lastname"
                      {...register("lastname", { required: true })}
                      size="large"
                      className="md:py-3 bg-[#E9E9E9]  "
                    />
                    {errors.lastname && <p>Last Name Number is required.</p>}
                  </Flex>
                </Flex>
              </Flex>
              <Flex className="flex-col space-y-2 mr-32 w-[100%]">
                <p>Phone Number</p>
                <Flex>
                  <Input
                    id="phone"
                    {...register("phone", { required: true })}
                    size="large"
                    className="md:py-3 bg-[#E9E9E9] "
                  />
                  {errors.phone && <p>Phone Number is required.</p>}
                </Flex>
              </Flex>
              <Flex className="flex-col space-y-2 me-6">
                <Flex className="justify-between">
                  <p>Email Address</p>
                  <p className="text-[#707070]">Change email</p>
                </Flex>
                <Flex>
                  <Input
                    size="large"
                    id="email"
                    {...register("email", { required: true })}
                    className="md:py-3 bg-[#E9E9E9] w-[110%] "
                  />
                  {errors.email && <p>Email is required.</p>}
                </Flex>
                <p className="text-[#707070]">
                  Your email address will be used to order status updates.
                </p>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="flex-col border items-start md:px-8 px-4 py-4 rounded-lg border-[#CFCFCF] p-2 space-y-7 m-auto w-[95%] sm:w-[90%] md:w-[100%]">
            <p className="font-semibold">Delivery info</p>
            <Flex className="flex-col space-y-2 w-[100%]">
              <p className="text-[.9rem]">Enter your address</p>
              <Flex>
                <Input
                  id="address"
                  {...register("address", { required: true })}
                  size="large"
                  className="py-3 bg-[#E9E9E9] "
                />
                {errors.address && <p>Address is required.</p>}
              </Flex>
            </Flex>
            <DatePicker
              placeholder="Select delivery date"
              size="large"
              className="w-[35%]"
            />
            <Flex className="space-x-2">
              <Checkbox />
              <p className="text-[.9rem]">
                I agree with{" "}
                <span className="text-[#2BA0AF]">
                  Delivery info, Return Policy, Payment info, Privacy Policy
                </span>
              </p>
            </Flex>
            <button
              onClick={handleChange}
              type="submit"
              className="w-[40%] text-white rounded-lg md:p-4 p-2 sm:text-[1rem] text-[0.9rem] bg-[#2BA0AF] font-semibold"
            >
              {" "}
              Proceed to Payment
            </button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};
export default Summary;

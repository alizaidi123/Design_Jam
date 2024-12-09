import Image from "next/image";
import { RiDeleteBin7Line } from "react-icons/ri";

import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
  return (
    <>
      <div className="relative">
      <div
        className=" w-full h-[316px] bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/contacts.jpeg')"  }}
      > 
        </div >
        <div className="absolute top-[25%] left-[48%] flex justify-center flex-col items-center ">
        <Image
            src="/pic1.png"
            alt="Furniro Logo"
            width={77}
            height={77}
            className="object-contain"
          />
          <h3 className="font-poppins text-[48px] text-[#000000] font-medium ">Cart</h3>
          <div className="flex items-center font-poppins">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Cart</h3>
          </div>
        </div>
        {/* <div> */}
        {/* </div> */}
      </div>

      <div className="flex flex-col-2 justify-start mt-2">
      <div className="flex flex-col"> 
        <div className=" producDetails flex justify-center items-center gap-24  w-[850px] h-[55px] mt-16 ml-24 font-poppins text-[16px] bg-[#F9F1E7] ">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div>

        <div className="flex flex-row ">
          <div className="flex flex-row justify-start mr-36 ml-24 ">
          <div className="bg-[#F9F1E7] flex  items-center w-[108px] h-[105px] mt-14">  <Image
            src="/asgardsofa.png"
            alt="Furniro Logo"
            width={100}
            height={40}
            className="object-contain"
          /></div>
        
          <div className="flex flex-row font-poppins ml-4 mt-24 gap-[74px]"> 
          <p>Asgaard sofa</p>
            <p className="font-poppins">Rs. 250,000.00</p>
            <p className="border border-solid rounded-lg py-1 px-3 font-poppins w-8 h-8"> 1 </p>
            <p className="font-poppins">Rs. 250,000.00</p>
            <RiDeleteBin7Line size={24}/>

          </div>
          
         
          </div>
         

        </div>
        


        </div>
        
        
        <div className=" bg-[#F9F1E7] text-center w-[393px] h-[390px] pt-2 mt-16 mb-6 flex flex-col gap-7 mr-5 items-center ">
          <h2 className="font-semibold font-poppins text-[32px] text-center">Cart Totals</h2>
        <div className=" flex flex-row gap-x-16 mt-10">
          <p className="font-poppins text-[16px] text-[#000000]"> Subtotal </p>
          <p className="font-poppins text-[16px] text-[#9F9F9F]"> Rs. 250,000.00</p>
        </div>
        <div className=" flex flex-row gap-x-14 mt-10">
          <p className="font-poppins text-[16px] text-[#000000]"> Total </p>
          <p className="font-poppins text-[20px] text-[#b88e2F]"> Rs. 250,000.00</p>
        </div>
          
          

          <button className="mt-5 rounded-xl font-poppins text-[20px] border-[#000000] border-[1px] h-[58.95px] p-2 pr-3  pl-3 w-[222px]">Check Out</button>
        </div>
        
                <div>

           
<div className="flex justify-evenly gap-1">
          

            </div>
        </div>
        

      </div>
      <div
        className=" w-full h-[200px] bg-cover bg-center mt-14 mb-2"
        style={{ backgroundImage: "url('/offerings.jpg')"  }}
      > 
        </div >
      
      
    </>
  );
}
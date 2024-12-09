import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";


export default function Blog () {
  return (
    <>
      <div className="relative">
        <div
          className="w-full h-[316px] bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/contacts.jpeg')" }}
        ></div>
        <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 flex justify-center flex-col items-center">
          <Image
            src="/pic1.png"
            alt="Furniro Logo"
            width={77}
            height={77}
            className="object-contain"
          />
          <h3 className="font-[500] font-poppins text-[36px] sm:text-[48px]">
            Blog
          </h3>
          <div className="flex items-center font-poppins">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Blog</h3>
          </div>
        </div>
      </div>

  <div className="w-full h-[150px] sm:h-[180px] md:h-[200px] bg-cover bg-center my-8 md:my-14"
  style={{ backgroundImage: "url('/offerings.jpg')" }}
></div>

    </>
  );
}

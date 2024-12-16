import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import FeaturesSection from "../Components/FeatureSec";

export default function Blog() {
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

      <div className="flex flex-col-1 md:flex-col-2 mt-2 justify-center gap-3 md:gap-20">
        <div className="container ml-2 mt-10 px-6 grid gap-10 md:grid-cols-1 w-full md:w-[820px] h-auto ">
          <div className="bg-[#F9F1E7] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/blog1.jpeg"
              alt="Blog Post 1"
              width={400}
              height={200}
              className="w-full object-cover h-[200px]"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">
                Going all-in with millennial design
              </h3>
              <p className="text-sm text-gray-700 font-poppins mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <a
                href="/blog/how-to-choose-furniture"
                className="text-[#b88e2F] font-poppins mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-[#F9F1E7] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/blog2.jpeg"
              alt="Blog Post 2"
              width={400}
              height={200}
              className="w-full object-cover h-[200px]"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">
                Exploring new ways of decorating
              </h3>
              <p className="text-sm text-gray-700 font-poppins mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <a
                href="/blog/minimalist-design-benefits"
                className="text-[#b88e2F] font-poppins mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-[#F9F1E7] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/blog3.jpeg"
              alt="Blog Post 3"
              width={400}
              height={200}
              className="w-full object-cover h-[200px]"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">
                Handmade pieces that took time to make
              </h3>
              <p className="text-sm text-gray-700 font-poppins mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <a
                href="/blog/interior-trends-2024"
                className="text-[#b88e2F] font-poppins mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-auto md:w-[393px] ml-1 mr-1 mt-10">
          <div className="flex flex-col font-poppins ">
            <div className=" box box-border flex flex-row px-4 py-1 rounded-lg border-2 border-solid border-[#9f9f9f] items-center justify-between *:">
              <input type="" size={40} />
              <FiSearch size={24} />
            </div>
            <div className="flex flex-col font-poppins mt-8 pl-8 gap-8 px-4">
              <h2 className="font-poppins text-xl font-bold text-[#000000]">
                {" "}
                Categories{" "}
              </h2>
              <div className="flex flex-col-2 gap-4 items-center justify-between">
                <ul className="font-poppins text-[16px] text-[#9f9f9f] space-y-5">
                  <li>Crafts</li>
                  <li>Design</li>
                  <li>Handmade</li>
                  <li>Interior</li>
                  <li>Wood</li>
                </ul>
                <ul className="font-poppins text-[16px] text-[#9f9f9f] items-center space-y-5 justify-center">
                  <li>2</li>
                  <li>8</li>
                  <li>7</li>
                  <li>1</li>
                  <li>6</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-10 mb-2"
      >
        <FeaturesSection/>
      </div>
  
    </>
  );
}

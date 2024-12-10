import Image from "next/image";

export default function Products() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/image-1.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      age: 25,
      image: "/image-2.png",
      description: "Stylish cafe chair.",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      age: 28,
      image: "/image-3.png",
      description: "Luxury big sofa.",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      age: 28,
      image: "/image-4.png",
      description: "Outdoor bar table & stool.",
    },
    {
      name: "Grifo",
      price: "Rp 1.500.000",
      age: 28,
      image: "/image-5.png",
      description: "Night lamp.",
    },
    {
      name: "Muggo",
      price: "Rp 150.000",
      age: 28,
      image: "/image-9.jpeg",
      description: "Small mug.",
    },
    {
      name: "Pingky",
      price: "Rp 7.000.000",
      age: 28,
      image: "/image-7.png",
      description: "Cute bed set",
    },
    {
      name: "Potty",
      price: "Rp 500.000",
      age: 28,
      image: "/image-8.jpeg",
      description: "Minimalist flower pot.",
    },
  ];

  return (
    <>
      <div className="product" id="products">
        <h2 className="text-center p-2 font-bold text-[2rem] sm:text-[3rem]">
          Our Product
        </h2>
      </div>
      <div className="Container grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4" style={{rowGap:"35px"}}>
        {data.map((card, index) => (
          <div
            className="card border shadow-lg rounded-lg overflow-hidden"
            key={index}
          >
            <Image
              src={card.image}
              alt={card.name}
              width={300}
              height={300}
              className="object-cover"
            />
            <div className="card-body p-4">
              <h5 className="card-title font-bold text-lg">{card.name}</h5>
              <p className="card-text text-gray-600">{card.description}</p>
              <h5 className="card-title font-bold text-lg mt-2">
                {card.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="flex items-center justify-center mb-12">
        <button className="productBtn w-[200px] sm:w-[245px] text-[#B88E2F] p-2 border-2 border-[#B88E2F] rounded hover:bg-[#B88E2F] hover:text-white transition">
          Show More
        </button>
      </div>
    </>
  );
}
 

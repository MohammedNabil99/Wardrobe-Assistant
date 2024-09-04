import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const InventoryPage: FC = () => {
  // Expanded wardrobe inventory items
  const items = [
    {
      id: 1,
      name: "Red T-Shirt",
      category: "Tops",
      quantity: 3,
      image: "/images/red-tshirt.jpeg",
    },
    {
      id: 2,
      name: "Blue Jeans",
      category: "Bottoms",
      quantity: 2,
      image: "/images/blue-jeans.jpeg",
    },
    {
      id: 3,
      name: "Black Blazer",
      category: "Outerwear",
      quantity: 1,
      image: "/images/black-blazer.jpeg",
    },
    {
      id: 4,
      name: "White Sneakers",
      category: "Shoes",
      quantity: 4,
      image: "/images/white-sneakers.jpeg",
    },
    {
      id: 5,
      name: "Leather Belt",
      category: "Accessories",
      quantity: 2,
      image: "/images/leather-belt.jpeg",
    },
    {
      id: 6,
      name: "Wool Scarf",
      category: "Accessories",
      quantity: 3,
      image: "/images/wool-scarf.jpeg",
    },
    {
      id: 7,
      name: "Denim Jacket",
      category: "Outerwear",
      quantity: 1,
      image: "/images/denim-jacket.jpeg",
    },
    {
      id: 8,
      name: "Black Dress Pants",
      category: "Bottoms",
      quantity: 2,
      image: "/images/black-dress-pants.jpeg",
    },
    {
      id: 9,
      name: "Graphic Hoodie",
      category: "Tops",
      quantity: 2,
      image: "/images/graphic-hoodie.jpeg",
    },
  ];

  return (
    <div className="px-8 pt-20">
      <h1 className="text-2xl font-bold mb-6">Wardrobe Inventory</h1>
      <Link
        href="/"
        className="inline-block mb-8 px-2 py-1 rounded-lg bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 text-black font-bold hover:scale-110 duration-200">
        Back to Home
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md overflow-hidden relative">
            <div className="w-full h-48 relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
                className="rounded-t-md"
              />
            </div>
            <div className="p-2 text-white">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>Category: {item.category}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;

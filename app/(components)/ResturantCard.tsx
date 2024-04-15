import React from "react";
import Link from "next/link";

const RestaurantCard = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg m-4 backdrop-blur-sm bg-[rgb(226,232,178)] shadow-red-600">
      <img className="w-full h-56 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <Link href="/order">
          <button className="flex justify-center items-center gap-2  h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-red-600  hover:shadow-xl p-2 tracking-wider">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;

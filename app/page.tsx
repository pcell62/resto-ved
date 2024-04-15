"use client";
import React, { useState, useEffect } from "react";

import { FaArrowRight } from "react-icons/fa";
import RestaurantCard from "./(components)/ResturantCard";
import Link from "next/link";

const Page = () => {
  const indianFoods = [
    {
      name: "Butter Chicken",
      description:
        "A classic Indian dish made with tender chicken cooked in a creamy tomato sauce.",
      image:
        "https://www.177milkstreet.com/assets/site/Recipes/_large/Butter-Chicken.jpg",
    },
    {
      name: "Palak Paneer",
      description:
        "A vegetarian dish consisting of paneer (Indian cheese) in a thick paste made from puréed spinach.",
      image:
        "https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-FF.jpg",
    },
    {
      name: "Biryani",
      description:
        "A fragrant rice dish cooked with Indian spices, meat (such as chicken or lamb), and vegetables.",
      image:
        "https://i.pinimg.com/736x/29/a2/50/29a250fef4c1e5190dc14da037ca751f.jpg",
    },
  ];

  return (
    <div className="mt-20 p-6 max-w-[88rem] m-auto">
      <div className="relative">
        <img
          src="https://www.chenabgourmet.com/wp-content/uploads/2022/05/Blog-Designs-12.png"
          alt="food-banner"
          className="w-full rounded-2xl h-[80vh] bg-no-repeat brightness-60 filter hidden md:block shadow-2xl shadow-red-600"
        />
        <div className="text-6xl  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-8 pl-14 z-10 hidden md:block backdrop-blur-sm">
          <div className=" font-bold text-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] tracking-wide font-Raleway italic ">
            Aa jao <div className="h-[20px]"></div>
            Gaand me lelo
          </div>
        </div>
      </div>
      <div className="flex p-7 mt-5">
        <div className=" p-5 w-full">
          <div className=" text-xl font-Raleway tracking-tight backdrop-blur-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            magni obcaecati adipisci omnis, assumenda suscipit quam architecto
            quisquam ipsum aliquid rerum esse sint eum, soluta iste facilis,
            ipsa laudantium. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Esse veritatis voluptates magni, ad corporis accusamus dolore
            quisquam sint? Quaerat fuga ea possimus quos voluptates mollitia
            quod corporis accusantium nisi in? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas pariatur consectetur sapiente,
            maxime nihil possimus voluptatum molestias reprehenderit? Unde
            laboriosam nihil ut libero voluptas inventore asperiores natus dolor
            alias quo.
          </div>
          <div className="py-10">
            <Link href="/menu">
              <button className="flex justify-center items-center gap-2  h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-red-600  hover:shadow-xl p-2 tracking-wider">
                View our Menu <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="md:flex md:flex-col md:w-1/2 md:p-5 hidden">
          <div className="h-1/2">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Grilled-octopus-18ef1d3.jpg"
              alt="buuter-chicken"
              className="rounded-t-3xl"
            />
          </div>
          <div className="flex h-1/2">
            <div className="w-1/2">
              <img
                src="https://www.foodandwine.com/thmb/NNlZ_nd4CERT6lKaY8GzfmmhLXk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Essential-Greek-Foods-You-Need-to-Try-FT-3-BLOG1122-f9a9d1eb150a470ea29f5b4da8c3d1e7.jpg"
                alt="idli-sambar"
                className="rounded-bl-3xl"
              />
            </div>
            <div className="w-1/2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RxD2iXpuvr7v-fmT9fpm7RUEBYlhxtRKgDGQeIb33g&s"
                alt="pav-bhaji"
                className="rounded-br-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Some of our most popular delicacies
        </h2>
        <div className="flex flex-wrap gap-8 justify-around">
          {indianFoods.map((food, index) => (
            <RestaurantCard
              key={index}
              name={food.name}
              description={food.description}
              image={food.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import RestaurantCard from "./(components)/ResturantCard";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

const Page = () => {
  const indianFoods = [
    {
      name: "Delicious baked moussaka",
      description:
        "Probably the most famous of Greek dishes, moussaka consists of layers of fried aubergine, minced meat and potatoes. That's all topped with a creamy béchamel sauce and then baked until golden brown. Some Greek restaurants will also serve an equally delectable vegetarian version.",
      image:
        "https://deih43ym53wif.cloudfront.net/large_moussaka-greek-food_4f07321456.jpeg",
    },
    {
      name: "Fasolatha",
      description:
        "Another of Greece’s national dishes, although not so well known internationally, is this classic white bean soup. It’s a simple, yet hearty affair consisting of beans, crushed tomatoes, and vegetables such as onions, carrots and celery. It’s often flavoured with thyme, parsley and bay leaves.",
      image:
        "https://deih43ym53wif.cloudfront.net/large_fasolatha-greek-food_90d9b9cd91.jpeg",
    },
    {
      name: "Sesame-covered koulouri",
      description:
        "Walk around any of the big Greek cities such as Athens or Thessaloniki in the mornings and you’ll often see locals on their way to work munching on koulouri – large soft bread rings covered in sesame seeds. They’re often sold from yellow street carts and eaten on the go with a cup of coffee. ",
      image:
        "https://deih43ym53wif.cloudfront.net/large_sesame-bread-ring-koulouri-greece-shutterstock_753727285_e54c509b77.jpeg",
    },
  ];

  return (
    <>
      <div className="mt-20 p-6 max-w-[88rem] m-auto">
        <div className="relative">
          <img
            src="kl.jpeg"
            alt="food-banner"
            className="w-full rounded-2xl h-[80vh] bg-no-repeat brightness-60 filter hidden md:block shadow-2xl shadow-yellow-400"
          />
          <div className="text-6xl  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-8 pl-14 z-10 hidden md:block backdrop-blur-sm"></div>
        </div>
        <div className="flex p-7 mt-5">
          <div className=" p-5 w-full">
            <div className=" text-xl font-Raleway tracking-tight backdrop-blur-sm "></div>
            <div className="py-10">
              <Link href="/menu">
                <button className="flex justify-center items-center gap-2  h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-yellow-400  hover:shadow-xl p-2 tracking-wider">
                  View our Menu <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Try this</h2>
          <div className="flex flex-wrap gap-2 justify-center">
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
    </>
  );
};

export default Page;

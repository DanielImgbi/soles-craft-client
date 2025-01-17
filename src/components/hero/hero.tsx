"use client";

import React from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

import { heroImages } from "@/common/constants";

const Hero = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <div className=" w-screen h-screen relative overflow-x-hidden overflow-hidden  md:bg-center md:bg-cover md:bg-no-repeat ">
      <div className="w-full h-auto block lg:h-screen ">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid "
          columnClassName="my-masonry-grid_column"
        >
          {heroImages.map((image, i) => (
            <Image
              key={image + i}
              src={image}
              height={200}
              width={350}
              alt="hero"
              className={`rounded-lg`}
            />
          ))}
        </Masonry>
      </div>

      <div className="absolute bg-black h-full w-full top-0 left-0 opacity-75 flex flex-col justify-center items-center gap-5 md:h-screen ">
        <div className=" shadow rounded-xl text-black  bg-green-100 px-5 py-2 flex flex-col justify-center items-center gap-5">
          <span className="rounded-lg">
            <h1 className=" text-2xl  font-bold rounded-xl lg:text-4xl">
              Soles<span className="font-semibold text-yellow-600">Craft</span>
            </h1>
          </span>
        </div>
        <p className="text-center text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Corporis impedit ex tempore rem!
          <br />
          Sunt corporis molestias molestiae, architecto atque repudiandae.
        </p>
      </div>
    </div>
  );
};

export default Hero;

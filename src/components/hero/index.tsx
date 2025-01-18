import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex px-10 bg-[#222]">
      <aside className="flex flex-col items-center space-y-10 justify-center md:items-start md:space-y-7 md:w-1/2 md:h-full">
        <h1 className="font-bold text-5xl md:text-8xl text-gray-300">
          Soles <span className="text-yellow-600">Craft</span>
        </h1>

        <p className="text-xl text-white text-center font-extralight md:text-start md:w-3/4">
          Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Corporis impedit ex tempore rem! Sunt corporis
          molestias molestiae, architecto atque repudiandae.
        </p>

        <button className="w-fit px-5 py-2 bg-yellow-600 rounded-[5px] text-white">
          Contact Us
        </button>
      </aside>

      <aside className="hidden justify-center space-x-2 items-center md:w-1/2 md:h-full md:flex">
        <section className="w-52 h-3/4 flex items-center">
          <div className="w-full h-5/6 rounded-xl animate-pulse overflow-hidden relative">
            <Image
              fill
              quality={100}
              alt="hero-image"
              objectFit="cover"
              src="/hero/hero-1.jpg"
              className="w-full h-full"
            />
          </div>
        </section>

        <section className="w-52 h-5/6 flex flex-col space-y-2">
          <div className="w-full h-3/4 rounded-xl overflow-hidden animate-pulse relative">
            <Image
              fill
              quality={100}
              alt="hero-image"
              src="/hero/hero-2.jpg"
              className="w-full h-full"
            />
          </div>

          <div className="w-full h-3/4 rounded-xl overflow-hidden animate-pulse relative">
            <Image
              fill
              quality={100}
              alt="hero-image"
              src="/hero/hero-3.jpg"
              className="w-full h-full"
            />
          </div>
        </section>

        <section className="w-52 h-3/4 flex items-center">
          <div className="w-full h-5/6 rounded-xl animate-pulse overflow-hidden relative">
            <Image
              fill
              quality={100}
              alt="hero-image"
              objectFit="cover"
              src="/hero/hero-4.jpg"
              className="w-full h-full"
            />
          </div>
        </section>
      </aside>
    </section>
  );
};

export default Hero;

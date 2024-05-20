import bannerPic from "/public/assets/banner.webp";
import Image from "next/image";

const Banner = ({ title }) => {
  return (
    <div className="bg-game-blue-100 relative-w-screen">
      <Image
        src={bannerPic}
        className=" opacity-0 md:object-cover md:w-full md:opacity-100 -mt-10 lg:py-0 lg:-mt-20 2xl:-mt-20"
        alt="background banner pic"
      />
      <div className="text-4xl lg:text-5xl md:block font-russo lg: top-40 lg:absolute mb-20 inset-x-0 text-white  text-center py-3">
        {title}
      </div>
    </div>
  );
};

export default Banner;

import React from "react";

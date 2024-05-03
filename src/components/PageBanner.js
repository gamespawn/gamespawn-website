import bannerPic from "/public/assets/banner.webp";
import Image from "next/image";

const Banner = ({ title }) => {
  return (
    <div className="bg-game-blue-100 relative-w-screen">
      <Image
        src={bannerPic}
        className=" opacity-0 md:object-cover w-full md:opacity-100 -mt-20"
        alt="background banner pic"
      />
      <div className="text-5xl md:block font-russo absolute top-40 inset-x-0 text-white  text-center">
        {title}
      </div>
    </div>
  );
};

export default Banner;

import React from "react";

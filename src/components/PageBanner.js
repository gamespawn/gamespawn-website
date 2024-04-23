import bannerPic from "/public/assets/banner.png";
import Image from "next/image";

const Banner = ({ title }) => {
  return (
    <div className="bg-game-blue-100 relative-w-screen">
      <Image
        src={bannerPic}
        className=" opacity-0 md:object-cover h-48 w-full md:opacity-100 "
        alt="background banner pic"
      />
      <div className="text-5xl md:block font-russo absolute top-32 inset-x-0 text-white  text-center">
        {title}
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
